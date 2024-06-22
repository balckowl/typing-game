import Image from "next/image";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/next-auth/options";

import About from "./components/top/about/about";
import HowToPlay from "./components/top/howToPlay/howToPlay";
import Footer from "./layout/footer/footer";
import Header from "./layout/header/header";

export default async function Home() {

  const session = await getServerSession(authOptions)

  //sessionがあったら、myPageに飛ばす
  if(session){
    redirect("/myPage")
  }

  return (
    <div>
      <Header />
      <div className="flex min-h-screen flex-col items-center font-sans">
        <div className="mb-8 flex w-full flex-col items-center">
          <Image
            src="/Hero.webp"
            alt="High-tech computer setup"
            className="h-[80vh] w-full object-cover"
            width="1000"
            height="500"
          />
          <About />
          <HowToPlay />
          {/* <StartButton /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
