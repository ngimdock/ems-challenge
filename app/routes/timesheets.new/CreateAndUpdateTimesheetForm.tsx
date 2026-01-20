import { Form } from "react-router";
import { Button } from "~/components/ui/button";

import { Field, FieldLabel } from "~/components/ui/field";

import { Input } from "~/components/ui/input";
import { Typography } from "~/components/typography";
import type { TimesheetType } from "../timesheets._index/types";

type CreateAndUpdateTimesheetFormProps = {
  employees: Array<{ id: string; full_name: string }>;
  timeSheet?: TimesheetType;
};

export function CreateAndUpdateTimesheetForm({
  employees,
  timeSheet,
}: CreateAndUpdateTimesheetFormProps) {
  return (
    <Form method="post" className="flex  flex-col gap-5 max-w-lg mx-auto">
      <Field>
        <FieldLabel htmlFor="employees">Employee</FieldLabel>
        <select
          name="employee_id"
          id="employee_id"
          className="border-accent border-2 rounded-md px-3 py-2 w-full"
          required
          defaultValue={timeSheet?.employee_id}
        >
          <option value="">
            <Typography className="text-sm">--Choose an employee--</Typography>
          </option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.full_name}
            </option>
          ))}
        </select>
      </Field>

      <Field>
        <FieldLabel htmlFor="start_time">Start Time</FieldLabel>
        <Input
          type="datetime-local"
          id="start_time"
          name="start_time"
          placeholder="1990-01-01"
          autoComplete="off"
          required
          defaultValue={timeSheet?.start_time}
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="end_time">End Time</FieldLabel>
        <Input
          type="datetime-local"
          id="end_time"
          name="end_time"
          placeholder="1990-01-01"
          autoComplete="off"
          required
          defaultValue={timeSheet?.end_time}
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="summary">summary</FieldLabel>
        <Input
          type="text"
          id="summary"
          name="summary"
          placeholder="Worked on employee management feature..."
          autoComplete="off"
          required={false}
          defaultValue={timeSheet?.summary || ""}
        />
      </Field>

      <Button type="submit">
        {timeSheet ? "Update Timesheet" : "Create Timesheet"}
      </Button>
    </Form>
  );
}
