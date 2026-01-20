import { Link } from "react-router";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

type BackRedirectionComponentProps = {
  text: string;
  link: string;
};
export const BackRedirectionComponent = ({
  link,
  text,
}: BackRedirectionComponentProps) => {
  return (
    <Link to={link} className="mb-4 inline-block">
      <Button variant="outline">
        <ArrowLeft /> {text}
      </Button>
    </Link>
  );
};
