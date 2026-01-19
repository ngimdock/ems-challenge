import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import type { TimesheetWithEmployee } from "../timesheets._index/types";
import { Separator } from "~/components/ui/separator";
import { Button } from "~/components/ui/button";
import { formatDateEN } from "~/lib/utils";

type TimesheetDetailsProps = {
  timesheet: TimesheetWithEmployee;
  onEdit: () => void;
};

export function TimesheetDetails({ timesheet, onEdit }: TimesheetDetailsProps) {
  const { employee_name, employee_department, start_time, end_time, summary } =
    timesheet;
  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader className="space-y-1">
        <h2 className="text-xl font-semibold">{employee_name}</h2>
        <p className="text-sm text-muted-foreground">{employee_department}</p>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Start time</p>
            <p className="font-medium">{formatDateEN(start_time)}</p>
          </div>
          <div>
            <p className="text-muted-foreground">End time</p>
            <p className="font-medium">{formatDateEN(end_time)}</p>
          </div>
        </div>

        <Separator />

        <div>
          <p className="text-sm text-muted-foreground mb-1">Summary</p>
          <p className="text-sm">{summary || "No summary provided."}</p>
        </div>

        <Separator />

        <div className="flex justify-end">
          <Button onClick={onEdit}>Edit timesheet</Button>
        </div>
      </CardContent>
    </Card>
  );
}
