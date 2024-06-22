"use client"
import React, { Dispatch, SetStateAction } from "react";

import { Button } from "@/components/ui/button";

import AllTechsList from "../selectPage/allTechListSection";

const Select = ({
  selectedTechs,
  setScene,
  setSelectedTechs,
}: {
  selectedTechs: string[],
  setScene: Dispatch<SetStateAction<number>>,
  setSelectedTechs: Dispatch<SetStateAction<string[]>>,
}) => {
  const allSections = [
    {
      name: "web",
      techs: [
        "HTML/CSS",
        "JavaScript",
        "React",
        "Next",
        "Vue",
        "Nuxt",
        "Firebase",
      ],
    },
    { name: "プログラミング言語", techs: ["C", "C++", "C#", "Python", "Rust"] },
    { name: "インフラ", techs: ["Docker", "AWS"] },
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

  const handleSubmit = () => {
    // ゲーム画面に遷移する
    setScene(1);
  };

  return (
    <div className="mt-8">
      <div className="mx-[20%] mb-8 rounded-2xl bg-white p-4 shadow-md">
        <h2 className="mb-4 text-2xl">
          好きな技術<span>(5つまで)</span>
        </h2>
        <AllTechsList
          allSections={allSections}
          onTechClick={handleTechClick}
          selectedTechs={selectedTechs}
        />
      </div>
      <div className="mb-8 text-center">
        <Button 
          onClick={handleSubmit} 
          className="h-20 w-[10%] rounded-xl bg-[#6AE88D] text-4xl text-white shadow-md"
          disabled={selectedTechs.length == 0}
        >
          決定
        </Button>
      </div>
    </div>
  );
}

export default Select;
