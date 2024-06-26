"use client"
import { useState } from "react"

import GameDisplay from "@/app/components/game/gameDisplay"
import Result from "@/app/components/game/result"
import Select from "@/app/components/game/select"

type Logo = {
  name: string;
  logo: string;
}

const GameClient = () => {
  const [scene, setScene] = useState<number>(0)
  const [typedLettersCount, setTypedLettersCount] = useState<number>(0)
  const [typingErrorsCount, setTypingErrorsCount] = useState<number>(0)
  const [completedWordsCount, setCompletedWordsCount] = useState<number>(0)
  const [wordList, setWordList] = useState<string[]>(["kusira"]);
  const [score, setScore] = useState<number>(0);

  // 制限時間
  const timeLimit = 60;

  // 技術リスト
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  return (
    <div className="h-full">
      {scene == 0 &&
        <Select 
          setScene={setScene}
          setSelectedTechs={setSelectedTechs}
          selectedTechs={selectedTechs}
          setWordList={setWordList}
        />
      }
      {scene >= 1 &&
        <GameDisplay
        completedWordsCount={completedWordsCount}
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
        selectedTechs={selectedTechs}
        />
      }

      {/* リザルト */}
      {scene >= 2 &&
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

export default GameClient