import { Badge } from "../ui/badge";

const BadgeComponent = ({ text }: { text: string }) => {
  return (
    <>
      <Badge className="mb-2">{text}</Badge>
      <Badge className="mb-2">{text}</Badge>
      <Badge className="mb-2">{text}</Badge>
      <Badge className="mb-2">{text}</Badge>
      <Badge className="mb-2">{text}</Badge>
      <Badge className="mb-2">{text}</Badge>
      <Badge className="mb-2">{text}</Badge>
      <Badge className="mb-2">{text}</Badge>
      <Badge className="mb-2">{text}</Badge>
      <Badge className="mb-2">{text}</Badge>
    </>
  );
};

export default BadgeComponent;
