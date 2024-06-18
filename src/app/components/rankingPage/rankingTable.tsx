import ScoreRow from './scoreRow';

type Score = {
  name: string;
  grade: string;
  rank: number;
  score: number;
  techs: string[];
}

type RankingTableProps = {
  scores: Score[];
}

type Header = {
  key: string;
  label: string;
}

const headers = [
  { key: '', label: '' },
  { key: 'name', label: 'Name' },
  { key: 'techs', label: 'Techs' },
  { key: 'score', label: 'Score' },
  { key: 'grade', label: 'Rank' },
];

const RankingTable  = ({scores}: RankingTableProps) => {
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
        {scores.map((score: Score) => (
          <ScoreRow key={score.rank} score={score} />
        ))}
      </tbody>
    </table>
  );
};


export default RankingTable;
