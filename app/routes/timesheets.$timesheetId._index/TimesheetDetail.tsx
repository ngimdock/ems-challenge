import { Card, CardContent, CardHeader } from "~/components/ui/card";
import type { TimesheetWithEmployee } from "../timesheets._index/types";
import { Separator } from "~/components/ui/separator";
import { Button } from "~/components/ui/button";
import { formatDateEN } from "~/lib/utils";
import { Badge } from "~/components/ui/badge";
import { Typography } from "~/components/typography";
import { Link } from "react-router";

type TimesheetDetailsProps = {
  timesheet: TimesheetWithEmployee;
};

export function TimesheetDetails({ timesheet }: TimesheetDetailsProps) {
  const { employee_name, employee_department, start_time, end_time, summary } =
    timesheet;

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader className="space-y-1">
        <h2 className="text-xl font-semibold">{employee_name}</h2>

        <Badge variant="secondary">{employee_department}</Badge>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <Typography className="text-muted-foreground">
              Start time
            </Typography>
            <Typography className="font-medium">
              {formatDateEN(start_time)}
            </Typography>
          </div>
          <div>
            <Typography className="text-muted-foreground">End time</Typography>
            <Typography className="font-medium">
              {formatDateEN(end_time)}
            </Typography>
          </div>
        </div>

        <Separator />

        <div>
          <p className="text-sm text-muted-foreground mb-1">Summary</p>
          <p className="text-sm">{summary || "No summary provided."}</p>
        </div>

        <Separator />

        <div className="flex justify-end">
          <Link to={`/timesheets/${timesheet.id}/edit`}>
            <Button>Edit timesheet</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
