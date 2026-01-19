import { redirect, useLoaderData, type ActionFunction } from "react-router";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { getDB } from "~/db/getDB";
import { CreateAndUpdateEmployeeForm } from "../employees.new/CreateAndUpdateEmployeeForm";
import { UpdateEmployeeQuery } from "./queries";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const employeeId = new URL(request.url).pathname.split("/")[2];

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
    employeeId,
  ];

  const db = await getDB();
  await db.run(UpdateEmployeeQuery, employeePayload);

  return redirect(`/employees/${employeeId}`);
};

export async function loader({ params }: { params: { employeeId: string } }) {
  const db = await getDB();
  const employee = await db.get(
    "SELECT * FROM employees WHERE id = ?;",
    params.employeeId,
  );

  return { employee };
}

export default function NewEmployeePage() {
  const { employee } = useLoaderData();

  if (!employee) return <div>Employee not found</div>;

  return (
    <div>
      <Card className="w-full sm:max-w-lg mx-auto mt-8">
        <CardHeader>
          <CardTitle>Update Employee</CardTitle>
          <CardDescription>
            Fill out the form below to update an employee.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreateAndUpdateEmployeeForm employee={employee} />
        </CardContent>
      </Card>
    </div>
  );
}
