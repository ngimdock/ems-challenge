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
import { updateTimesheetQuery } from "./queries";
import { CreateAndUpdateTimesheetForm } from "../timesheets.new/CreateAndUpdateTimesheetForm";
import { BackRedirectionComponent } from "~/components/BackRedirectionComponent";

export const action: ActionFunction = async ({ request }) => {
  const timesheetId = new URL(request.url).pathname.split("/")[2];

  const formData = await request.formData();

  const db = await getDB();
  await db.run(updateTimesheetQuery, [
    formData.get("employee_id"),
    formData.get("start_time"),
    formData.get("end_time"),
    formData.get("summary"),
    timesheetId,
  ]);

  return redirect(`/timesheets/${timesheetId}`);
};

export async function loader({ params }: { params: { timesheetId: string } }) {
  const db = await getDB();
  const employees = await db.all(
    "SELECT id, full_name FROM employees ORDER BY created_at DESC",
  );

  const timeSheet = await db.get(
    "SELECT * FROM timesheets WHERE id = ?;",
    params.timesheetId,
  );

  return { employees, timeSheet };
}

export default function NewTimesheetPage() {
  const { employees, timeSheet } = useLoaderData();

  return (
    <div>
      <BackRedirectionComponent
        text="Timesheet Details"
        link={`/employees/${timeSheet.id}`}
      />
      <Card className="w-full sm:max-w-lg mx-auto mt-8">
        <CardHeader>
          <CardTitle>Update Timesheet</CardTitle>
          <CardDescription>
            Fill out the form below to update a timesheet.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreateAndUpdateTimesheetForm
            employees={employees}
            timeSheet={timeSheet}
          />
        </CardContent>
      </Card>
    </div>
  );
}
