import { useLoaderData } from "react-router";
import { getDB } from "~/db/getDB";
import { TimesheetTable } from "./TimesheetTable";
import { TimesheetHeader } from "./TimesheetHeader";
import { findAllTimesheetsWithEmployeesQuery } from "./queries";

export async function loader() {
  const db = await getDB();
  const timesheetsAndEmployees = await db.all(
    findAllTimesheetsWithEmployeesQuery,
  );

  return { timesheetsAndEmployees };
}

export default function TimesheetsPage() {
  const { timesheetsAndEmployees } = useLoaderData();

  console.log({ timesheetsAndEmployees });

  return (
    <div className="w-full">
      <TimesheetHeader />
      <TimesheetTable timesheetWithEmployee={timesheetsAndEmployees} />
    </div>
  );
}
