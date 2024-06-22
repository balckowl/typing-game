import Link from "next/link"

import { Button } from "@/components/ui/button"

const StartBtn = () => {
  return (
    <div className="mx-auto w-max py-10">
      <Link href="/game">
        <Button className="h-max bg-green-400 shadow-md hover:bg-green-500">
          <p className="p-[10px] text-2xl font-bold">スタート</p>
        </Button>
      </Link>
    </div>
  )
}

export default StartBtn