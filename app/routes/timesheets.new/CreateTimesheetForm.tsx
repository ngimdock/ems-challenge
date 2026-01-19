import { Form } from "react-router";
import { Button } from "~/components/ui/button";

import { Field, FieldLabel } from "~/components/ui/field";

import { Input } from "~/components/ui/input";
import { Typography } from "~/components/typography";

type CreateTimesheetFormProps = {
  employees: Array<{ id: string; full_name: string }>;
};

export function CreateTimesheetForm({ employees }: CreateTimesheetFormProps) {
  return (
    <Form method="post" className="flex  flex-col gap-5 max-w-lg mx-auto">
      <Field>
        <FieldLabel htmlFor="employees">Employee</FieldLabel>
        <select
          name="employee_id"
          id="employee_id"
          className="border-accent border-2 rounded-md px-3 py-2 w-full"
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
          type="date"
          id="start_time"
          name="start_time"
          placeholder="1990-01-01"
          autoComplete="off"
          required
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="end_time">End Time</FieldLabel>
        <Input
          type="date"
          id="end_time"
          name="end_time"
          placeholder="1990-01-01"
          autoComplete="off"
          required
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
        />
      </Field>

      <Button type="submit">Create Timesheet</Button>
    </Form>
  );
}
