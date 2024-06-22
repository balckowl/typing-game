"use client"
import React, { Dispatch, SetStateAction, useState } from "react";

import AllTechsList from "../selectPage/allTechListSection";
import SubmitButton from "../selectPage/submitButton";

const Select = ({setScene} : {setScene: Dispatch<SetStateAction<number>>}) => {
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

  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

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
    // ゲーム画面に遷移するロジックを追加
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
        <SubmitButton onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default Select;
