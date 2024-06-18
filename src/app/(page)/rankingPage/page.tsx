import ButtonContainer from "@/app/components/rankingPage/buttonContainer";
import RankingTable from "@/app/components/rankingPage/rankingTable";

interface Score {
  name: string;
  grade: string;
  rank: number;
  score: number;
  techs: string[];
}

const scores: Score[] = [
  {
    name: "ぽてきち",
    grade: "S",
    rank: 1,
    score: 24000,
    techs: ["HTML/CSS", "JavaScript", "React"],
  },
  {
    name: "ぽてきち",
    grade: "S",
    rank: 2,
    score: 24000,
    techs: ["HTML/CSS", "JavaScript", "React"],
  },
  {
    name: "ぽてきち",
    grade: "S",
    rank: 3,
    score: 24000,
    techs: ["HTML/CSS", "JavaScript", "React"],
  },
  {
    name: "ぽてきち",
    grade: "S",
    rank: 4,
    score: 24000,
    techs: ["HTML/CSS", "JavaScript", "React"],
  },
  {
    name: "ぽてきち",
    grade: "S",
    rank: 5,
    score: 24000,
    techs: ["HTML/CSS", "JavaScript", "React"],
  },
  {
    name: "ぽてきち",
    grade: "S",
    rank: 6,
    score: 24000,
    techs: ["HTML/CSS", "JavaScript", "React"],
  },
  {
    name: "ぽてきち",
    grade: "S",
    rank: 7,
    score: 24000,
    techs: ["HTML/CSS", "JavaScript", "React"],
  },
  {
    name: "ぽてきち",
    grade: "S",
    rank: 8,
    score: 24000,
    techs: ["HTML/CSS", "JavaScript", "React"],
  },
  {
    name: "ぽてきち",
    grade: "S",
    rank: 9,
    score: 24000,
    techs: ["HTML/CSS", "JavaScript", "React"],
  },
  {
    name: "くしらくしら",
    grade: "B",
    rank: 10,
    score: 23000,
    techs: ["HTML/CSS", "JavaScript", "React"],
  },
  {
    name: "K.A.",
    grade: "A",
    rank: 11,
    score: 21000,
    techs: ["HTML/CSS", "JavaScript", "React"],
  },
  {
    name: "Sora_339",
    grade: "C",
    rank: 12,
    score: 20000,
    techs: ["HTML/CSS", "JavaScript", "React"],
  },
];

const RankingPage = () => (
  <div className="flex min-h-screen flex-col items-center bg-gray-50 font-sans">
    <div className="mt-8 w-full max-w-4xl px-6">
      <h2 className="mb-2 text-center text-2xl">あなたのハイスコア</h2>
      <p className="mb-6 text-center text-4xl">23000</p>
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

export default RankingPage;
