"use client"
import { useState } from "react"

import GameDisplay from "@/app/components/game/gameDisplay"
import Result from "@/app/components/game/result"

type Logo = {
  name: string;
  logo: string;
}

const Game = () => {
  const [Scene, setScene] = useState<number>(0)
  const [ncourse, setNcourse] = useState<number>(0)
  const [typedLettersCount, setTypedLettersCount] = useState<number>(0)
  const [typingErrorsCount, setTypingErrorsCount] = useState<number>(0)
  const [completedWordsCount, setCompletedWordsCount] = useState<number>(0)
  const [wordList, setWordList] = useState<string[]>(["kusira"]);
  const [logoList, setLogoList] = useState<Logo[]>([{ name: "next", logo: "./next.svg" }, { name: "next", logo: "./next.svg" }]);
  //過去の設定があるか確認し、なければtrueとする。
  const [isTypingSound, setIsTypingSound] = useState<boolean>(true)
  const [isBGM, setIsBGM] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  // 時間
  const timeLimit = 5;

  return (
    <div className="relative h-screen">
      <GameDisplay
        timeLimit={timeLimit}
        wordList={wordList} setScene={setScene}
        logoList={logoList}
        typedLettersCount={typedLettersCount}
        setTypedLettersCount={setTypedLettersCount}
        typingErrorsCount={typingErrorsCount}
        setTypingErrorsCount={setTypingErrorsCount}
        completedWordsCount={completedWordsCount}
        setCompletedWordsCount={setCompletedWordsCount}
        isTypingSound={isTypingSound}
        score = {score}
        setScore = {setScore}
      />
      {/* リザルト */}
      {Scene == 1 && 
        <Result
          timeLimit={timeLimit}
          score={score}
          typedLettersCount={typedLettersCount}
          typingErrorsCount={typingErrorsCount}
        />
      }

    </div>
  )
}

export default Game