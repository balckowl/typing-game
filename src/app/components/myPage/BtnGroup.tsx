import Link from "next/link"

import { Button } from "@/components/ui/button"

const BtnGroup = () => {
  return (
    <div className="flex justify-center gap-3 pt-5">
      <div >
        <Link href="/game">
          <Button className="h-max bg-green-400 shadow-md hover:bg-green-500">
            <p className="text-2xl font-bold">スタート</p>
          </Button>
        </Link>
      </div>

      <div className="pb-7">
        <Link href="/rankingPage">
          <Button className="h-max bg-orange-700 shadow-md hover:bg-orange-900">
            <p className="text-2xl font-bold">ランキング</p>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default BtnGroup