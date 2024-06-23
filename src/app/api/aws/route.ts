// import { BedrockRuntimeClient, InvokeModelWithResponseStreamCommand } from "@aws-sdk/client-bedrock-runtime";
// import { NextRequest, NextResponse } from "next/server"

// const client = new BedrockRuntimeClient({
//     region: process.env.AWS_REGION,
// });

// const POST = async (req: NextRequest) => {
//     const { selectedTechs } = await req.json()
//     const techText = selectedTechs.join("/")
//     const prompt = ` ${techText}のワードを含む配列を1つjavascriptの記法で返してください。それ以外はいりません。`

//     const payload = {
//         "anthropic_version": "bedrock-2023-05-31",
//         "max_tokens": 1000,
//         "messages": [{ role: "user", content: [{ type: "text", text: `${prompt}` }] }],
//     };

//     const res = await client.send(
//         new InvokeModelWithResponseStreamCommand({
//             "modelId": 'anthropic.claude-3-sonnet-20240229-v1:0',
//             "contentType": 'application/json',
//             "accept": "application/json",
//             "body": JSON.stringify(payload)
//         })
//     );


//     return NextResponse.json({ res }, { status: 200 })
// }

// export { POST }

import { BedrockRuntimeClient, InvokeModelCommand, InvokeModelWithResponseStreamCommand } from "@aws-sdk/client-bedrock-runtime";
import { NextRequest, NextResponse } from "next/server";

const client = new BedrockRuntimeClient({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
    },
    region: process.env.AWS_REGION
});

export const postMessageWithRiouteHandler = async (prompt: string) => {
    const payload = {
        anthropic_version: "bedrock-2023-05-31",
        max_tokens: 1000,
        messages: [{ content: [{ text: prompt, type: "text" }], role: "user" }],
    };
    const response = await client.send(
        new InvokeModelWithResponseStreamCommand({
            body: JSON.stringify(payload),
            contentType: 'application/json',
            modelId: 'anthropic.claude-3-sonnet-20240229-v1:0'
        })
    );
    return response;
}

const POST = async (req: NextRequest) => {

    const { selectedTechs } = await req.json();
    const techText = selectedTechs.join("/");
    const prompt = `${techText}でよく使われる構文に関する単語を配列形式のみで出力してください。
出力例
  "import",
  "export",
  "const",
  "let",
  "var",
  "function",
  "arrow function",
  "map",
  "filter",
  "reduce",
  "forEach",
  "spread operator",
  "destructuring",
  "template literals",
  "async/await",
  "Promise",
  "fetch",
  "useState",
  "useEffect",
  "useContext",
  "useReducer",
  "useMemo",
  "useCallback",
  "useRef",
  "props",
  "state",
  "render",
  "component",
  "JSX",
  "React Hooks",
  "React Router",
  "Next.js",
  "getStaticProps",
  "getServerSideProps",
  "getInitialProps",
  "dynamic import",
  "React.lazy",
  "Suspense",
  "ReactDOM.hydrate",
  "ReactDOM.render"`

    const params = {
        accept: "application/json",
        body: JSON.stringify({
            anthropic_version: "bedrock-2023-05-31",
            max_tokens: 1000,
            messages: [{ content: [{ text: `${prompt}`, type: "text" }], role: "user" }]
        }),
        contentType: "application/json",
        modelId: "anthropic.claude-3-haiku-20240307-v1:0",
    };

    const command = new InvokeModelCommand(params);
    const response = await client.send(command);
    const textDecoder = new TextDecoder("utf-8");
    const responseBodyText = textDecoder.decode(response.body);
    const responseBody = JSON.parse(responseBodyText);
    const responseText = responseBody.content[0].text;


    return NextResponse.json({responseText}, { status: 200 });
}

export { POST };
