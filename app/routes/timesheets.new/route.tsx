import { useLoaderData, Form, redirect } from "react-router";
import { getDB } from "~/db/getDB";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export async function loader() {
  const db = await getDB();
  const employees = await db.all(
    "SELECT id, full_name FROM employees ORDER BY created_at DESC",
  );
  return { employees };
}

import type { ActionFunction } from "react-router";
import { CreateTimesheetForm } from "./CreateTimesheetForm";
import { createTeimesheetQuery } from "./queries";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const employee_id = formData.get("employee_id");
  const start_time = formData.get("start_time");
  const end_time = formData.get("end_time");
  const summary = formData.get("summary");

  const db = await getDB();
  await db.run(createTeimesheetQuery, [
    employee_id,
    start_time,
    end_time,
    summary,
  ]);

  return redirect("/timesheets");
};

export default function NewTimesheetPage() {
  const { employees } = useLoaderData();

  return (
    <div>
      <Card className="w-full sm:max-w-lg mx-auto mt-8">
        <CardHeader>
          <CardTitle>Create Timesheet</CardTitle>
          <CardDescription>
            Fill out the form below to create a new timesheet.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreateTimesheetForm employees={employees} />
        </CardContent>
      </Card>
    </div>
  );
}
