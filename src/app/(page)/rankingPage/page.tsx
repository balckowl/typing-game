"use client"; // これを追加

import { useEffect, useState } from "react";

import ButtonContainer from "@/app/components/rankingPage/buttonContainer";
import RankingTable from "@/app/components/rankingPage/rankingTable";

type Score = {
  name: string;
  grade: string;
  rank: number;
  score: number;
  techs: string[];
}

const RankingPage = () => {
  const [scores, setScores] = useState<Score[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setScores(data);
      } catch (error) {
        setError('Failed to fetch data');
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div className="flex min-h-screen flex-col items-center bg-gray-50 font-sans">
      <div className="mt-8 w-full max-w-4xl px-6">
        <h2 className="mb-2 text-center text-2xl">エラーが発生しました</h2>
        <p className="mb-6 text-center text-4xl">{error}</p>
      </div>
    </div>;
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 font-sans">
      <div className="mt-8 w-full max-w-4xl px-6">
        <h2 className="mb-2 text-center text-2xl">あなたのハイスコア</h2>
        <p className="mb-6 text-center text-4xl">{scores.length > 0 ? scores[0].score : 0}</p>
        <section className="rounded-xl bg-[#D0E8FF] px-8 py-6 shadow-md">
          <h3 className="mb-4 text-lg font-semibold">総合ランキング</h3>
          <div className="h-[500px] overflow-x-auto">
            <RankingTable scores={scores} />
          </div>
        </section>
        <ButtonContainer />
      </div>
    </div>
  );
};

export default RankingPage;
