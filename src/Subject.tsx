export interface SubjectProps {
  name: string;
  personalityType: string;
}

export const Subject = ({ name, personalityType }: SubjectProps) => (
  <>
    <p>Name:{name}</p>
    <p>Personality Type:{personalityType}</p>
  </>
);
