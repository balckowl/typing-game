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

  const [score, setScore] = useState<number>(0);

  const htmlCssWords = ["<html>","<head>","<body>","<div>","<span>","<a>","<img>","<p>","<ul>","<ol>","<li>","<table>","<tr>","<td>","class","id","style","margin","padding","border","font-family","font-size","color","background-color","display","position","float","hover","active","media queries"];

  const javascriptWords = ["let","const","var","function","if","else","else if","for","while","do while","switch","case","break","return","true","false","null","undefined","Array","Object","String","Number","typeof","new","this","prototype","try","catch","throw","async","await","Promise","addEventListener","document","getElementById","querySelector","querySelectorAll","fetch","JSON","map","filter","reduce"];

  const goWords = ["package","import","func","var","const","type","struct","interface","defer","go","select","chan","range","return","if","else","for","switch","case","default","break","continue","nil","panic","recover","make","new","append","copy","len","cap"];

  const gitWords = ["clone","init","add","commit","push","pull","fetch","branch","checkout","merge","rebase","reset","stash","tag","status","log","diff","remote","config","ignore","blame","submodule","reflog","amend"];

  // 各配列を結合して一つの配列にする
  const words = [...htmlCssWords, ...javascriptWords, ...goWords, ...gitWords];
  const [wordList, setWordList] = useState<string[]>(words);
  
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