import { getDB } from "~/db/getDB";
import { findTimesheetWithEmployeeQuery } from "./queries";
import { TimesheetDetails } from "./TimesheetDetail";
import { useLoaderData } from "react-router";
import { BackRedirectionComponent } from "~/components/BackRedirectionComponent";

export async function loader({ params }: { params: { timesheetId: string } }) {
  const db = await getDB();
  const timesheet = await db.get(
    findTimesheetWithEmployeeQuery,
    params.timesheetId,
  );

  return { timesheet };
}

export default function TimesheetPage() {
  const loaderData = useLoaderData();

  return (
    <div>
      <BackRedirectionComponent text="All Timesheets" link="/timesheets" />
      <TimesheetDetails timesheet={loaderData.timesheet} />
    </div>
  );
}
