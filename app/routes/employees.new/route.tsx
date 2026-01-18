import { redirect, type ActionFunction } from "react-router";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { CreateEmployeeForm } from "./CreateEmployeeForm";
import { getDB } from "~/db/getDB";
import { createEmployeeQuery } from "./queries";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const full_name = formData.get("full_name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const date_of_birth = formData.get("date_of_birth");
  const job_title = formData.get("job_title");
  const department = formData.get("department");
  const salary = formData.get("salary");
  const start_date = formData.get("start_date");
  const end_date = formData.get("end_date");

  console.log({ formData });

  const db = await getDB();
  await db.run(createEmployeeQuery, [
    full_name,
    email,
    phone || null,
    date_of_birth,
    job_title,
    department,
    salary ?? null,
    start_date,
    end_date,
  ]);

  return redirect("/employees");
};

export default function NewEmployeePage() {
  return (
    <div>
      <Card className="w-full sm:max-w-lg mx-auto mt-8">
        <CardHeader>
          <CardTitle>Create Employee</CardTitle>
          <CardDescription>
            Fill the form to create a new employee
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreateEmployeeForm />
        </CardContent>
      </Card>
    </div>
  );
}
