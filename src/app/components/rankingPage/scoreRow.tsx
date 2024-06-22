import { Games, User } from '@prisma/client';

import TechBadge from './techBadge';

const ScoreRow = ({ index, score, user }: { index: number, score: Games & { user: User }, user: User }) => {
  const rankScore = [0, 5000, 10000, 15000, 20000, 25000, 30000];
  const rankName = ["E", "D", "C", "B", "A", "S", "SS"];

  const getRank = (score: number) => {
    for (let i = 1; i < rankScore.length; i++) {
      if (score < rankScore[i]) {
        return rankName[i - 1];
      }
    }
    return rankName[rankName.length - 1];
  };

  console.log(score);
  return (
    <tr className={`${user.id === score.userId ? "bg-yellow-500" : ""} border-b-2 py-4 text-center`}>
      <td className="leading-[3]">{index + 1}</td>
      <td className="leading-[3]">{score.user.name}</td>
      <td className="leading-[3]">
        <div className='flex flex-wrap gap-2'>
          {score.techs.map((tech: string, index: number) => (
            <TechBadge tech={tech} key={index} />
          ))}
        </div>
      </td>
      <td className="leading-[3]">
        {score.score}
      </td>
      <td className="leading-[3]">
        {getRank(score.score)}
      </td>
    </tr>
  );
};

export default ScoreRow;
