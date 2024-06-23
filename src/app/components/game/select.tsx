"use client"
import React, { Dispatch, SetStateAction } from "react";

import { Button } from "@/components/ui/button";

import AllTechsList from "./allTechListSection";

const Select = ({
  selectedTechs,
  setScene,
  setSelectedTechs,
  setWordList
}: {
  selectedTechs: string[],
  setScene: Dispatch<SetStateAction<number>>,
  setSelectedTechs: Dispatch<SetStateAction<string[]>>,
  setWordList: Dispatch<SetStateAction<string[]>>
}) => {
  const allSections = [
    {
      name: "フロントエンド",
      techs: [
        "HTML/CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Vue",
        "Nuxt.js",
      ],
    },
    {
      name: "バックエンド",
      techs: [
        "SQL",
        "Go",
        "Ruby",
        "PHP",
        "Laravel",
        "Node.js",
        "Nest.js", "C",
        "C++",
        "C#",
        "Python",
        "Rust",
        "Java",
      ],
    },
    { name: "インフラ", techs: ["Docker", "AWS", "Azure"] },
    { name: "その他", techs: ["Git", "Unity"] },
  ];

  const handleTechClick = (tech: string) => {
    setSelectedTechs((prevSelected) => {
      if (prevSelected.includes(tech)) {
        return prevSelected.filter((t) => t !== tech);
      } else if (prevSelected.length < 5) {
        return [...prevSelected, tech];
      } else {
        return prevSelected;
      }
    });
  };

  const handleSubmit = async () => {

    //ここで技術を生成する
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/aws`,
      {
        body: JSON.stringify({ selectedTechs }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST",
      }
    )
    const data = await res.json()

    //wordListに技術ワードを格納する
    console.log(JSON.parse(data.responseText))
    setWordList(JSON.parse(data.responseText))
    // ゲーム画面に遷移する
    setScene(1);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="mb-8 max-w-[600px] rounded-2xl bg-white p-4 shadow-md">
        <div className="flex justify-between">

          <h2 className="mb-4 text-2xl">
            好きな技術<span>(5つまで)</span>
          </h2>
          <div>
            <Button
              onClick={handleSubmit}
              className="w-[100px] rounded-xl bg-[#6AE88D] text-xl text-white shadow-md"
              disabled={selectedTechs.length == 0}
            >
              決定
            </Button>
          </div>
        </div>
        <AllTechsList
          allSections={allSections}
          onTechClick={handleTechClick}
          selectedTechs={selectedTechs}
        />
      </div>
    </div>
  );
}

export default Select;
