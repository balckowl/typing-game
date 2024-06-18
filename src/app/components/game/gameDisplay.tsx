"use client"
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"

import { Progress } from "@/components/ui/progress";

type Logo = {
  name: string;
  logo: string;
}

type ResultProps = {
  completedWordsCount: number;
  isTypingSound: boolean;
  logoList: Logo[];
  score: number;
  setCompletedWordsCount: Dispatch<SetStateAction<number>>;
  setScene: Dispatch<SetStateAction<number>>;
  setScore: Dispatch<SetStateAction<number>>;
  setTypedLettersCount: Dispatch<SetStateAction<number>>;
  setTypingErrorsCount: Dispatch<SetStateAction<number>>;
  timeLimit: number;
  typedLettersCount: number;
  typingErrorsCount: number;
  wordList: string[];
}

const GameDisplay = ({
  completedWordsCount,
  isTypingSound,
  logoList,
  score,
  setCompletedWordsCount,
  setScene,
  setScore,
  setTypedLettersCount,
  setTypingErrorsCount,
  timeLimit,
  typedLettersCount,
  typingErrorsCount,
  wordList,
}: ResultProps) => {

  // 制限時間
  const [timer, setTimer] = useState<number>(timeLimit);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [letterArray, setLetterArray] = useState<string[]>([]);
  const [currentWord, setCurrentWord] = useState<number>(0);
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const [typingError, setTypingError] = useState<boolean>(false);
  const [correctSteak, setCorrectSteak] = useState<number>(0);
  const [showAddScore, setShowAddScore] = useState<boolean>(false);

  // 現在表示されている文字の配点
  const [currScoring, setCurrScoreing] = useState<number>(wordList[0].split("").length * 100);
  
  // 定数
  // プログレスバーの最大文字数
  const progressMax = 40;
  const typingSound = new Audio("/SE/typingSound.mp3");

  // タイム処理
  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 1) {
          clearInterval(timerId);
          // タイマーが終了した後に状態を更新する
          setTimeout(() => setScene(1), 0);
          return 0;
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);

    // クリーンアップ関数
    return () => clearInterval(timerId);
  }, []);

  // タイピング処理
  useEffect(() => {
    //バラした文字をセットする
    setLetterArray(wordList[currentWord].split(""))
    //inputにフォーカスを当てる
    inputRef.current?.focus();
  }, [currentWord])

  //連続正解文字数に応じてスコア加算の倍率が変わる
  const getScoreMultiplier = (correctSteak: number) => {
    let scoreMultiplier:number = 1.0;
    if (correctSteak >= 40) {
      scoreMultiplier = 2.1;
    }
    else if (correctSteak >= 30) {
      scoreMultiplier = 1.9;
    }
    else if (correctSteak >= 20) {
      scoreMultiplier = 1.6;
    }
    else if (correctSteak >= 10) {
      scoreMultiplier = 1.3;
    }
    return scoreMultiplier
  }

  // スコア加算のアニメーションが完了した後に実行する関数
  const handleAnimationComplete = () => {
    setShowAddScore(false);
  };

  // タイプしたときの判定
  const isCorrectTypedLetter = (e: React.KeyboardEvent) => {
    // 制限時間後はキーを受け付けない
    if(timer == 0){
      return
    }

    //タイプ音がONかどうか
    if (isTypingSound) {
      // キーが押されたら音を鳴らす
      typingSound.play()
    }

    // 正しい文字をタイプした時
    if (e.key === letterArray[currentPosition]) {
      //打つ文字をずらす
      setCurrentPosition(currentPosition + 1)
      //ミス判定を元に戻す
      setTypingError(false)
      //連続成功数を更新
      setCorrectSteak(correctSteak + 1)
      //打った文字数
      setTypedLettersCount(typedLettersCount + 1)

      // 文字列を打ち終えたときの処理
      if (currentPosition + 1 === letterArray.length) {
        //次の問題へ
        const nextWord = Math.floor(Math.random() * wordList.length)
        setCurrentWord(nextWord)
        setCurrScoreing(wordList[nextWord].split("").length * 100)
        //文字位置を初期化
        setCurrentPosition(0)
        // クリアしたワード数を更新
        setCompletedWordsCount(completedWordsCount + 1)
        // スコア加算のアニメーションを実行
        setShowAddScore(true)
        // スコア加算をする
        setScore((prev: number) => prev + (currScoring * getScoreMultiplier(correctSteak + 1)))
      }

    // 間違えた文字をタイプした時
    } else {
      setTypingError(true)
      //間違えたのでリセット
      setCorrectSteak(0)
      //ミスの回数をカウント
      setTypingErrorsCount(typingErrorsCount + 1)
    }
  }

  return (
    <div className="flex h-full items-center">
      <div className=" mx-auto flex h-[70vh] w-4/5 flex-col justify-between rounded">
        <div className="flex items-center justify-between p-3">
          {/* ゲーム情報 */}
          <div className="relative w-full">
            <div>
              <p className="mb-2 text-[30px]">スコア :{score}</p>
              <p className="text-[30px]">残り{timer}秒</p>
            </div>
            <div className="absolute left-[140px] top-[-30px]">
              <AnimatePresence>
                {showAddScore && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    onAnimationComplete={handleAnimationComplete}
                    className="text-red-500"
                  >
                    <p>
                      <span>+ {currScoring}</span>
                      <span>{getScoreMultiplier(correctSteak + 1) == 1.0 ? "" : `× ${getScoreMultiplier(correctSteak + 1)}`}</span>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* プログレスバー */}
          <div className="mr-[50px]">
            <div className="w-[40vw]">
              <Progress value={correctSteak / progressMax * 100} className="mb-2" style={{ width: 'calc(100% - 30px)' }} />
            </div>
            <div className="flex justify-between">
              <p className="text-sm opacity-0">| ×1.0</p>
              <p className="text-sm">| ×1.3</p>
              <p className="text-sm">| ×1.6</p>
              <p className="text-sm">| ×1.9</p>
              <p className="text-sm">| ×2.1</p>
            </div>

          </div>
        </div>

        {/* メイン処理部分 */}
        <div className="flex items-center justify-center border-0 p-3 outline-none"
          onKeyDown={(e) => isCorrectTypedLetter(e)}
          tabIndex={0}
          ref={inputRef}
        >
          <span className={`mb-[40px] text-[60px] text-green-500`}>
            {wordList[currentWord].slice(0, currentPosition)}
          </span>
          {typingError ? (
            <span className="mb-[40px] text-[50px] text-red-400">
              {letterArray[currentPosition]}
            </span>
          ) : (
            <span className="mb-[40px] text-[50px] text-gray-400">
              {letterArray[currentPosition]}
            </span>
          )}
          <span className="mb-[40px] text-[50px] text-gray-200">
            {wordList[currentWord].slice(currentPosition + 1, wordList[currentWord].length)}
          </span>
        </div>

        {/* 技術リスト */}
        <ul className="flex items-center gap-4 border-t border-black p-3">
          {logoList.map((logo: Logo, idx: number) => (
            <li key={idx} className="flex items-center gap-2">
              <div>
                <Image src={logo.logo} alt={logo.name} width={30} height={30} />
              </div>
              <p>{logo.name}</p>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default GameDisplay