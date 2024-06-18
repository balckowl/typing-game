import TechBadge from './techBadge';

type Score = {
  name: string;
  grade: string;
  rank: number;
  score: number;
  techs: string[];
}

type ScoreRowProps = {
  score: Score;
}

type Column = {
  key: string;
  value: React.ReactNode;
}

const ScoreRow = ({ score }:ScoreRowProps) => {
  const columns = [
    { key: 'rank', value: score.rank },
    { key: 'name', value: score.name },
    {
      key: 'techs',
      value: (
        <div className="flex flex-wrap gap-2">
          {score.techs.map((tech: string) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
      ),
    },
    { key: 'score', value: score.score },
    { key: 'grade', value: score.grade },
  ];

  return (
    <tr className={score.rank === 10 ? "bg-yellow-100" : ""}>
      {columns.map((column: Column) => (
        <td key={column.key} className="border-t border-gray-200 px-4 py-3">
          {column.value}
        </td>
      ))}
    </tr>
  );
};

export default ScoreRow;