import { redirect, type ActionFunction } from "react-router";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { CreateAndUpdateEmployeeForm } from "./CreateAndUpdateEmployeeForm";
import { getDB } from "~/db/getDB";
import { createEmployeeQuery } from "./queries";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const employeePayload = [
    formData.get("full_name"),
    formData.get("email"),
    formData.get("phone") || null,
    formData.get("date_of_birth"),
    formData.get("job_title"),
    formData.get("department"),
    formData.get("salary") ?? null,
    formData.get("start_date"),
    formData.get("end_date"),
  ];

  const db = await getDB();
  await db.run(createEmployeeQuery, employeePayload);

  return redirect("/employees");
};

export default function NewEmployeePage() {
  return (
    <div>
      <Card className="w-full sm:max-w-lg mx-auto mt-8">
        <CardHeader>
          <CardTitle>Create Employee</CardTitle>
          <CardDescription>
            Fill out the form below to create a new employee.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreateAndUpdateEmployeeForm />
        </CardContent>
      </Card>
    </div>
  );
}
