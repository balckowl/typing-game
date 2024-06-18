"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

import Additional from "./additional"

const Result = ({
  score,
  timeLimit,
  typedLettersCount,
  typingErrorsCount,
}: {
  score: number;
  timeLimit: number;
  typedLettersCount: number;
  typingErrorsCount: number;
}) => {

  //　TODO: refrashされないバグ 
  const router = useRouter()
  const handleReset = () => {
    router.push("/game")
  }

  // 加点
  const scoreAdditional = score;
  const typeSpeedAdditional = Math.floor(typedLettersCount ** 1.3 / 10) * 10;
  const typeErrorAdditional = Math.max(10 * Math.floor(500 - (typingErrorsCount ** 1.2 * 5)), 0);
  const lastScore = scoreAdditional + typeSpeedAdditional + typeErrorAdditional;

  return (
    <div className="absolute inset-0 z-[100] flex items-center justify-center">

      <div className="z-[110] h-[70%] w-4/5 max-w-[700px] rounded-lg bg-white p-20 pt-10">
        {/* 加点情報 */}
        <div className="mb-20 flex flex-col">
          <Additional item={"スコア"} text={`${score}`} additionalPoint={scoreAdditional} />
          <Additional item={"タイプ速度"} text={`${(typedLettersCount / timeLimit).toFixed(1)} key/s` } additionalPoint={typeSpeedAdditional} />
          <Additional item={"ミスタイプ"} text={`${typingErrorsCount} 回`} additionalPoint={typeErrorAdditional} />
        </div>

        {/* 最終スコア */}
        <div className="mb-20 flex justify-end">
          <div className="flex w-max  gap-4 border-b-2 border-[#333]">
            <div className="flex items-end">
              <p className="pb-2">最終スコア</p>
            </div>
            <div className="relative">
              <p className="text-[40px] font-bold">{lastScore}</p>
              <p className="absolute bottom-[-32px] text-yellow-500">High Score!!</p>
            </div>
          </div>
        </div>

        {/* ボタン */}
        <div className="flex flex-col gap-4">
          {/* 1列目 */}
          <div className="flex w-full flex-wrap justify-between">
            <div className="w-[30%]">
              <Button 
                onClick={handleReset}
                className="mx-2 h-max w-full grow bg-green-400 shadow-md hover:bg-green-600"
              >
                <p className="py-3 text-xl font-bold">やり直す</p>
              </Button>
            </div>
            <div className="w-[30%]">
              <Link href="/myPage" className="block w-full">
                <Button className="mx-2 h-max w-full grow bg-red-400 shadow-md hover:bg-red-600">
                  <p className="py-3 text-xl font-bold">マイページへ</p>
                </Button>
              </Link>
            </div>
            <div className="w-[30%]">
              <Link href="/myPage" className="block w-full">
                <Button className="mx-2 h-max w-full grow shadow-md">
                  <p className="py-3 text-xl font-bold">Xで共有</p>
                </Button>
              </Link>
            </div>
          </div>

          {/* 2列目 */}
          <div className="flex w-full justify-end">
            <Link href="/ranking">
              <Button className="bg-orange-700 py-0 shadow-md hover:bg-orange-900">
                <p className="font-bold text-orange-100">ランキングを表示</p>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* 黒back */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </div>
  )
}

export default Result