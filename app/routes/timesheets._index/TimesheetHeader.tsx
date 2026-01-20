import { Link } from "react-router";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Plus } from "lucide-react";

export const TimesheetHeader = () => {
  return (
    <div className="flex items-end py-4 justify-end">
      {/* <Input
        placeholder="Filter emails..."
        value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
        onChange={(event: { target: { value: any } }) =>
          table.getColumn("email")?.setFilterValue(event.target.value)
        }
        className="max-w-sm"
      /> */}

      <Link to="/timesheets/new" className="ml-2 inline-block">
        <Button variant="default" className="ml-auto">
          <Plus className="h-4 w-4" /> Create Timesheet
        </Button>
      </Link>
    </div>
  );
};
