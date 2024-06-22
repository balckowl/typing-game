"use client"
import { useState } from "react"

import GameDisplay from "@/app/components/game/gameDisplay"
import Result from "@/app/components/game/result"
import Select from "@/app/components/game/select"

type Logo = {
  name: string;
  logo: string;
}

const Game = () => {
  const [scene, setScene] = useState<number>(0)
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
  const timeLimit = 60;

  return (
    <div className="relative h-screen">
      {scene == 0 &&
        <Select setScene={setScene} />
      }
      {scene >= 1 &&
        <GameDisplay
          timeLimit={timeLimit}
          wordList={wordList}
          scene={scene}
          setScene={setScene}
          logoList={logoList}
          typedLettersCount={typedLettersCount}
          setTypedLettersCount={setTypedLettersCount}
          typingErrorsCount={typingErrorsCount}
          setTypingErrorsCount={setTypingErrorsCount}
          completedWordsCount={completedWordsCount}
          setCompletedWordsCount={setCompletedWordsCount}
          isTypingSound={isTypingSound}
          score={score}
          setScore={setScore}
        />
      }

      {/* リザルト */}
      {scene == 2 &&
        <Result
          timeLimit={timeLimit}
          score={score}
          typedLettersCount={typedLettersCount}
          typingErrorsCount={typingErrorsCount}
          setScene={setScene}
          setTypedLettersCount={setTypedLettersCount}
          setTypingErrorsCount={setTypingErrorsCount}
          setCompletedWordsCount={setCompletedWordsCount}
          setScore={setScore}
        />
      }

    </div>
  )
}

export default Game