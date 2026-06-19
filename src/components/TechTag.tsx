import { getTechColor } from "@/lib/techColors";

interface TechTagProps {
  name: string;
}

const TechTag = ({ name }: TechTagProps) => (
  <span className={`tech-tag ${getTechColor(name)}`}>{name}</span>
);

export default TechTag;
