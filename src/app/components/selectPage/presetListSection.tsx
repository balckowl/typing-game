import { Pencil } from "lucide-react"

import { cn } from "@/lib/utils"

type Tech = {
  name: string;
  techs: string[];
}

const PresetsList = ({ presetSection }: { presetSection: Tech[] }) => {
  return (
    <div>
      {presetSection.map((tech: Tech, idx: number) => (
        <div key={idx}>
          <div
            className={cn("mb-4 p-4 rounded-md shadow-md h-[200px] bg-white")}
          >
            <div className={cn("flex justify-between border-b-2 pb-2 mb-4 border-glay-200")}>
              <p className="font-bold">{tech.name}</p>
              <div className="flex gap-5">
                <div className="transition-all hover:opacity-60">
                  <Pencil color="black" />
                </div>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {tech.techs.map((t: string, idx: number) => (
                <div key={idx} className={cn("p-2 rounded-full bg-gray-200")}>
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

export default PresetsList
