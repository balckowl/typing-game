import { Trash2, Wrench } from "lucide-react"
import React from "react"

import { cn } from "@/lib/utils"

interface Tech {
  name: string;
  techs: string[];
}

const TechsList = ({ currentTechsNum, techsList }: { currentTechsNum: Number, techsList: Tech[] }) => {
  return (
    <div>
      {techsList.map((tech: Tech, index: number) => (
        <div key={index}>
          <div
            className={cn("mb-4 p-4 rounded-md shadow-md h-[200px]", index == currentTechsNum ? "bg-orange-200" : "bg-white")}
          >
            <div className={cn("flex justify-between border-b-2 pb-2 mb-4", index == currentTechsNum && "border-black")}>
              <p className="font-bold">{tech.name}</p>
              <div className="flex gap-5">
                <div className="transition-all hover:opacity-60">
                  <Wrench color="black" />
                </div>
                <div className="transition-all hover:opacity-60">
                  <Trash2 color="black" />
                </div>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {tech.techs.map((t, idx) => (
                <div key={idx} className={cn("p-2 rounded-full", index == currentTechsNum ? "bg-white" : "bg-gray-200")}>
                  {t}
                </div>
              ))}
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default TechsList