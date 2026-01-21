import { useLoaderData, Form, redirect } from "react-router";
import { getDB } from "~/db/getDB";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import type { ActionFunction } from "react-router";
import { createTimesheetQuery } from "./queries";
import { CreateAndUpdateTimesheetForm } from "./CreateAndUpdateTimesheetForm";
import { BackRedirectionComponent } from "~/components/BackRedirectionComponent";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const db = await getDB();

  const createTimesheetPayload = [
    formData.get("employee_id"),
    formData.get("start_time"),
    formData.get("end_time"),
    formData.get("summary"),
  ];

  await db.run(createTimesheetQuery, createTimesheetPayload);

  return redirect("/timesheets");
};

export async function loader() {
  const db = await getDB();
  const employees = await db.all(
    "SELECT id, full_name FROM employees ORDER BY created_at DESC",
  );
  return { employees };
}

export default function NewTimesheetPage() {
  const { employees } = useLoaderData();

  return (
    <div>
      <BackRedirectionComponent text="All Timesheets" link="/timesheets" />
      <Card className="w-full sm:max-w-lg mx-auto mt-3">
        <CardHeader>
          <CardTitle>Create Timesheet</CardTitle>
          <CardDescription>
            Fill out the form below to create a new timesheet.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreateAndUpdateTimesheetForm employees={employees} />
        </CardContent>
      </Card>
    </div>
  );
}
