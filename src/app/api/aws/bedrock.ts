import "dotenv/config";

import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";
import fs from "fs";

const word =
  "JavascriptのDom操作でよく使うメソッドを英単語で出力してください．出力はその単語一つだけでお願いします";

// Create a new BedrockRuntimeClient
const client = new BedrockRuntimeClient({
  region: process.env.AWS_REGION,
});

// const params = {
//   modelId: "anthropic.claude-3-haiku-20240307-v1:0",
//   contentType: "application/json",
//   accept: "application/json",
//   body: JSON.stringify({
//     anthropic_version: "bedrock-2023-05-31",
//     max_tokens: 1000,
//     messages: [
//       {
//         role: "user",
//         content: [
//           {
//             type: "text",
//             text: "こんにちは",
//           },
//         ],
//       },
//     ],
//   }),
// };
const invokeModel = async (word: string) => {
  const params = {
    accept: "*/*",
    body: `{"inputText":"${word}"}`,
    contentType: "application/json",
    modelId: "amazon.titan-text-express-v1",
  };
  console.log(params);
  try {
    // Invoke the model
    const command = new InvokeModelCommand(params);
    const response = await client.send(command);

    // Parse the response and extract the text
    const textDecoder = new TextDecoder("utf-8");
    // Decode the response body
    const responseBodyText = textDecoder.decode(response.body);

    // Write the response text to a file
    fs.writeFileSync("output/text.json", responseBodyText, "utf-8");
    // Parse the response body text
    const responseBody = JSON.parse(responseBodyText);
    const reason = responseBody.results[0].completionReason;
    console.log(reason);
    console.log("--------------------\noutput\n--------------------");
    const outputText = responseBody.results[0].outputText;
    const outputWords = outputText.split("\n");
    console.log(outputWords);
    // const responseText = responseBody.content[0].text;
    // console.log("Response Text:", responseText);
  } catch (error) {
    console.error("Error invoking model:", error);
  }
};

export default invokeModel(word);
