import { Games, User } from '@prisma/client';

import ScoreRow from './scoreRow';

type Header = {
  key: string;
  label: string;
}

const headers = [
  { key: 'rank', label: 'Rank' },
  { key: 'name', label: 'Name' },
  { key: 'techs', label: 'Techs' },
  { key: 'score', label: 'Score' },
  { key: 'grade', label: 'Grade' },
];

const RankingTable = ({ games, user }: { games: (Games & { user: User })[], user: User }) => {

  return (
    <table className="min-w-full rounded-lg bg-white shadow-md">
      <thead>
        <tr className="bg-gray-200">
          {headers.map((header: Header) => (
            <th key={header.key} className="px-4 py-3 text-left">
              {header.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {games.map((score: Games & {user: User}, index: number) => (
          <ScoreRow key={score.id} score={score} user={user} index={index} />
        ))}
      </tbody>
    </table>
  );
};


export default RankingTable;
