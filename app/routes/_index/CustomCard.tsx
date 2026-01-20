import { ExternalLink } from "lucide-react";
import { Link } from "react-router";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

type Props = {
  count: number;
  title: string;
  description: string;
  link: string;
};

export const CustomCard = ({ count, title, description, link }: Props) => {
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {count}
        </CardTitle>
        <CardAction>
          <Link to={link} className="cursor-pointer">
            <Button variant="outline">
              <ExternalLink />
              Verify
            </Button>
          </Link>
        </CardAction>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">{description}</div>
        <div className="text-muted-foreground">Updated informations</div>
      </CardFooter>
    </Card>
  );
};
