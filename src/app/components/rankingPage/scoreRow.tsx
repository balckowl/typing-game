import { Games, User } from '@prisma/client';

import TechBadge from './techBadge';

const ScoreRow = ({ index, score, user }: { index: number, score: Games & { user: User }, user: User }) => {

  console.log(score)
  return (
    <tr className={`${user.id === score.userId && "bg-yellow-500"} text-center`}>
      <td>{index + 1}</td>
      <td>{score.user.name}</td>
      <td>
        <div className='flex flex-wrap gap-2'>
          {score.techs.map((tech: string, index: number) => (
            <TechBadge tech={tech} key={index} />
          ))}
        </div>
      </td>
      <td>
        {score.score}
      </td>
      <td></td>
    </tr>
  );
};

export default ScoreRow;