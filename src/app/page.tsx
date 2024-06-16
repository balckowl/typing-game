import Link from "next/link";

import { auth } from "../../auth";
import Header from "./layout/header/header";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <Header />
      {session?.user ?
          // ログインしている場合 
          <div>
            <Link href="/myPage">マイページへ</Link>
          </div>
        :
          <div>
            サインインしてください。
          </div>
      }
    </div>
  );
}
