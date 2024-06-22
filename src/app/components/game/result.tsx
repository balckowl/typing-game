"use client"
import Link from "next/link"
import { Dispatch, SetStateAction, useEffect } from "react"

import { Button } from "@/components/ui/button"

import Additional from "./additional"

type ResultComponentProps = {
  score: number;
  selectedTechs: string[];
  setCompletedWordsCount: Dispatch<SetStateAction<number>>;
  setScene: Dispatch<SetStateAction<number>>;
  setScore: Dispatch<SetStateAction<number>>;
  setSelectedTechs: Dispatch<SetStateAction<string[]>>;
  setTypedLettersCount: Dispatch<SetStateAction<number>>;
  setTypingErrorsCount: Dispatch<SetStateAction<number>>;
  timeLimit: number;
  typedLettersCount: number;
  typingErrorsCount: number;
};

const Result = ({
  score,
  selectedTechs,
  setCompletedWordsCount,
  setScene,
  setScore,
  setSelectedTechs,
  setTypedLettersCount,
  setTypingErrorsCount,
  timeLimit,
  typedLettersCount,
  typingErrorsCount,
}: ResultComponentProps) => {

  const handleReset = () => {
    setScene(0);
    setTypedLettersCount(0);
    setTypingErrorsCount(0);
    setCompletedWordsCount(0);
    setScore(0);
    setSelectedTechs([]);
  };

  const scoreAdditional = score;
  const typeSpeedAdditional = Math.floor(typedLettersCount ** 1.7 / timeLimit * 5) * 10;
  const typeErrorAdditional = Math.max(10 * Math.floor(200 * typedLettersCount / timeLimit - (typingErrorsCount ** 1.2 * 5)), 0);
  const lastScore = scoreAdditional + typeSpeedAdditional + typeErrorAdditional;

  const submitScore = async() => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/score`, {
      body: JSON.stringify({ lastScore, selectedTechs }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
    })
  }

  useEffect(() => {
    submitScore()
  },[])

  return (
    <div className="absolute inset-0 z-[100] flex items-center justify-center">
      <div className="z-[110] h-[70%] w-4/5 max-w-[700px] rounded-lg bg-white p-20 pt-10">
          {/* 加点情報 */}
          <div className="mb-20 flex flex-col">
            <Additional item={"スコア"} text={`${score}`} additionalPoint={scoreAdditional} />
            <Additional item={"タイプ速度"} text={`${(typedLettersCount / timeLimit).toFixed(1)} key/s`} additionalPoint={typeSpeedAdditional} />
            <Additional item={"ミスタイプ"} text={`${typingErrorsCount} 回`} additionalPoint={typeErrorAdditional} />
          </div>

          {/* 最終スコア */}
          <div className="mb-20 flex justify-end">
            <div className="flex w-max  gap-4 border-b-2 border-[#333]">
              <div className="flex items-end">
                <p className="pb-2">最終スコア</p>
              </div>
              <p className="text-[40px] font-bold">{lastScore}</p>
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
                  <p className="text-xl font-bold">やり直す</p>
                </Button>
              </div>
              <div className="w-[30%]">
                <Link href="/myPage" className="block w-full">
                  <Button className="mx-2 h-max w-full grow bg-red-400 shadow-md hover:bg-red-600">
                    <p className="text-xl font-bold">マイページへ</p>
                  </Button>
                </Link>
              </div>
              <div className="w-[30%]">
                <Link href="/myPage" className="block w-full">
                  <Button className="mx-2 h-max w-full grow shadow-md">
                    <p className="text-xl font-bold">Xで共有</p>
                  </Button>
                </Link>
              </div>
            </div>

            {/* 2列目 */}
            <div className="flex w-full justify-end">
              <Link href="/rankingPage">
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