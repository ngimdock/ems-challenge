import { Form } from "react-router";
import { Button } from "~/components/ui/button";

import { Field, FieldLabel } from "~/components/ui/field";

import { Input } from "~/components/ui/input";
import { Typography } from "~/components/typography";
import { DEPARTMENTS } from "~/lib/data";
import type { EmployeeType } from "../employees._index/types";

type CreateEmployeeFormProps = {
  employee?: EmployeeType;
};

export function CreateAndUpdateEmployeeForm({
  employee,
}: CreateEmployeeFormProps) {
  console.log({ employee });
  return (
    <Form method="post" className="flex  flex-col gap-5 max-w-lg mx-auto">
      <Field>
        <FieldLabel htmlFor="full_name">Full Name</FieldLabel>
        <Input
          type="text"
          id="full_name"
          name="full_name"
          placeholder="John Doe"
          autoComplete="off"
          required
          defaultValue={employee?.full_name}
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="monemail@gmail.com"
          autoComplete="off"
          required
          defaultValue={employee?.email}
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="date_of_birth">Date of Birth</FieldLabel>
        <Input
          type="date"
          id="date_of_birth"
          name="date_of_birth"
          placeholder="1990-01-01"
          autoComplete="off"
          required
          defaultValue={employee?.date_of_birth}
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="job_title">Job Title</FieldLabel>
        <Input
          type="text"
          id="job_title"
          name="job_title"
          placeholder="Software Engineer"
          autoComplete="off"
          required
          defaultValue={employee?.job_title}
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="salary">Salary</FieldLabel>
        <Input
          type="number"
          id="salary"
          name="salary"
          placeholder="50000"
          autoComplete="off"
          required
          defaultValue={employee?.salary ?? undefined}
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="start_date">Start Date</FieldLabel>
        <Input
          type="date"
          id="start_date"
          name="start_date"
          placeholder="1990-01-01"
          autoComplete="off"
          required
          defaultValue={employee?.start_date}
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="department">Department</FieldLabel>
        <select
          name="department"
          id="department"
          className="border-accent border-2 rounded-md px-3 py-2 w-full"
          defaultValue={employee?.department || ""}
          required
        >
          <option value="">
            <Typography className="text-sm">--Choose a department--</Typography>
          </option>
          {Object.keys(DEPARTMENTS).map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </Field>

      <Button type="submit">
        {employee ? "Update Employee" : "Create Employee"}
      </Button>
    </Form>
  );
}
