import Image from "next/image";

import About from "./components/top/about/about";
import HowToPlay from "./components/top/howToPlay/howToPlay";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center font-sans">
      <div className="mb-8 flex w-full flex-col items-center">
        <Image
          src="/Hero.webp"
          alt="High-tech computer setup"
          className="h-[80vh] w-full object-cover"
          width="1000"
          height="500"
        />
        <About/>
        <HowToPlay />
        {/* <StartButton /> */}
      </div>
    </div>
  );
}
