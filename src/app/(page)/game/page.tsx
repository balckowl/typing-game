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
  const [typedLettersCount, setTypedLettersCount] = useState<number>(0)
  const [typingErrorsCount, setTypingErrorsCount] = useState<number>(0)
  const [completedWordsCount, setCompletedWordsCount] = useState<number>(0)
  const [wordList, setWordList] = useState<string[]>(["kusira"]);
  const [logoList, setLogoList] = useState<Logo[]>([{ name: "next", logo: "./next.svg" }, { name: "next", logo: "./next.svg" }]);
  const [score, setScore] = useState<number>(0);

  // 制限時間
  const timeLimit = 5;

  // 技術リスト
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  return (
    <div className="relative h-screen">
      <div>{selectedTechs}</div>
      {scene == 0 &&
        <Select 
          setScene={setScene}
          setSelectedTechs={setSelectedTechs}
          selectedTechs={selectedTechs}
        />
      }
      {scene >= 1 &&
        <GameDisplay
        completedWordsCount={completedWordsCount}
        logoList={logoList}
        scene={scene}
        score={score}
        setCompletedWordsCount={setCompletedWordsCount}
        setScene={setScene}
        setScore={setScore}
        setTypedLettersCount={setTypedLettersCount}
        setTypingErrorsCount={setTypingErrorsCount}
        timeLimit={timeLimit}
        typedLettersCount={typedLettersCount}
        typingErrorsCount={typingErrorsCount}
        wordList={wordList}
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
          setSelectedTechs={setSelectedTechs}
          selectedTechs={selectedTechs}
        />
      }

    </div>
  )
}

export default Game