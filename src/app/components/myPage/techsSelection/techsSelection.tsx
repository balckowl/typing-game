import Link from "next/link";

import TechsList from "./techsList";

type Tech = {
  name: string;
  techs: string[];
}

type TechListProps = {
  currentTechsNum: number;
  techsList: Tech[];
}

const TechsSelection = ({ currentTechsNum, techsList }: TechListProps) => {
  return (
    <div className="mx-auto max-w-[600px]">
      <p className="mb-2 ml-2 text-xl font-bold">技術選定リスト</p>
      <div className="rounded-md bg-pink-100 p-6 shadow-lg xl:w-full">
        
        <TechsList techsList={techsList} currentTechsNum={currentTechsNum}/>
        {/* 追加ボタン */}
        <Link href="./select">
          <div className="h-[100px] cursor-pointer rounded-md bg-gray-400 p-4 transition-all hover:opacity-80">
            <div className="flex h-full items-center justify-center text-3xl text-white">+</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default TechsSelection;
