type TechBadgeProps = {
  tech: string;
}

const TechBadge = ({ tech }: TechBadgeProps) => (
  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm">{tech}</span>
);

export default TechBadge;