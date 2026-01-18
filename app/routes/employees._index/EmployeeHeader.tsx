import { Link } from "react-router";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Plus } from "lucide-react";

export const EmployeeHeader = () => {
  return (
    <div className="flex items-center py-4 justify-between">
      <Input
        placeholder="Filter emails..."
        // value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
        // onChange={(event: { target: { value: any } }) =>
        //   table.getColumn("email")?.setFilterValue(event.target.value)
        // }
        className="max-w-sm"
      />

      <Link to="/employees/new" className="ml-2 inline-block">
        <Button variant="outline" className="ml-auto">
          <Plus className="h-4 w-4" /> Add Employee
        </Button>
      </Link>
    </div>
  );
};
