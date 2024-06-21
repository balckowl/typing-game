import React from "react";

import { cn } from "@/lib/utils";

type Tech = {
  name: string;
  techs: string[];
}

const AllTechsList = ({ allSections, onTechClick, selectedTechs }: { allSections: Tech[], onTechClick: (tech: string) => void, selectedTechs: string[] }) => {
  return (
    <div>
      {allSections.map((tech: Tech, idx: number) => (
        <div key={idx}>
          <div className={cn("mb-4 p-4 h-fit bg-white")}>
            <div className={cn("flex justify-between border-b-2 pb-2 mb-4 border-gray-200")}>
              <p className="font-bold">{tech.name}</p>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {tech.techs.map((t: string, idx: number) => (
                <div
                  key={idx}
                  className={cn("p-2 rounded-full cursor-pointer", selectedTechs.includes(t) ? "bg-blue-200" : "bg-gray-200")}
                  onClick={() => onTechClick(t)}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllTechsList;
