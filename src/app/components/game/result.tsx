"use client"
import Link from "next/link"
import { Dispatch, SetStateAction, useEffect, useRef,useState } from "react"

import { submitScore } from "@/actions/game"
import { Button } from "@/components/ui/button"

import Additional from "./additional"

type ResultComponentProps = {
  score: number;
  setCompletedWordsCount: Dispatch<SetStateAction<number>>;
  setScene: Dispatch<SetStateAction<number>>;
  setScore: Dispatch<SetStateAction<number>>;
  setTypedLettersCount: Dispatch<SetStateAction<number>>;
  setTypingErrorsCount: Dispatch<SetStateAction<number>>;
  timeLimit: number;
  typedLettersCount: number;
  typingErrorsCount: number;
};

const Result = ({
  score,
  setCompletedWordsCount,
  setScene,
  setScore,
  setTypedLettersCount,
  setTypingErrorsCount,
  timeLimit,
  typedLettersCount,
  typingErrorsCount,
}: ResultComponentProps) => {
  const [isScoreSubmitted, setIsScoreSubmitted] = useState(false); // スコア送信のフラグ
  const submitButtonRef = useRef<HTMLButtonElement | null>(null); // 送信ボタンの参照を追加

  const handleReset = () => {
    setScene(0)
    setTypedLettersCount(0)
    setTypingErrorsCount(0)
    setCompletedWordsCount(0)
    setScore(0)
  };

  // 加点
  const scoreAdditional = score;
  const typeSpeedAdditional = Math.floor(typedLettersCount ** 1.7 / timeLimit * 5) * 10;
  const typeErrorAdditional = Math.max(10 * Math.floor(1000 - (typingErrorsCount ** 1.2 * 5)), 0);
  const lastScore = scoreAdditional + typeSpeedAdditional + typeErrorAdditional;

  // フォームの送信イベントハンドラ
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // デフォルトのフォーム送信を防ぐ

    if (isScoreSubmitted) return; // すでに送信されている場合は何もしない

    const formData = new FormData(event.currentTarget);

    try {
      const response = await submitScore(formData); // サーバーアクションを直接呼び出す

      if (response) {
        console.log("スコアが正常に送信されました");
        setIsScoreSubmitted(true); // スコア送信フラグを立てる
      } else {
        console.error("スコアの送信に失敗しました");
      }
    } catch (error) {
      console.error("エラーが発生しました:", error);
    }
  };

  // コンポーネントがマウントされた時に送信ボタンをクリックする
  useEffect(() => {
    if (submitButtonRef.current) {
      submitButtonRef.current.click();
    }
  }, []);

  // localStorageから選択した技術を取得
  const selectedTechs = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("selectedTechs") || "[]") : [];

  return (
    <div className="absolute inset-0 z-[100] flex items-center justify-center">
      <div className="z-[110] h-[70%] w-4/5 max-w-[700px] rounded-lg bg-white p-20 pt-10">
        <form onSubmit={handleSubmit}>
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

          {/* フォームデータの隠しフィールド */}
          <input type="hidden" name="userId" value="1" />
          <input type="hidden" name="score" value={lastScore.toString()} />
          <input type="hidden" name="techs" value={selectedTechs.join(",")} />

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
              <Link href="/rankingPage">
                <Button className="bg-orange-700 py-0 shadow-md hover:bg-orange-900">
                  <p className="font-bold text-orange-100">ランキングを表示</p>
                </Button>
              </Link>
            </div>
          </div>

          {/* 送信ボタン */}
          <button type="submit" ref={submitButtonRef}></button>
        </form>
      </div>

      {/* 黒back */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </div>
  )
}

export default Result