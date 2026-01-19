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
  // set default values if employee is provided (for update form)
  const defaultValues = employee
    ? {
        full_name: employee.full_name,
        email: employee.email,
        phone: employee.phone,
        date_of_birth: employee.date_of_birth,
        job_title: employee.job_title,
        department: employee.department,
        salary: employee.salary,
        start_date: employee.start_date,
        end_date: employee.end_date,
      }
    : null;

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
          defaultValue={defaultValues?.full_name}
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
          defaultValue={defaultValues?.email}
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
          defaultValue={defaultValues?.date_of_birth}
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
          defaultValue={defaultValues?.job_title}
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
          defaultValue={defaultValues?.salary ?? undefined}
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
          defaultValue={defaultValues?.start_date}
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="department">Department</FieldLabel>
        <select
          name="department"
          id="department"
          className="border-accent border-2 rounded-md px-3 py-2 w-full"
          defaultValue={defaultValues?.department || ""}
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
