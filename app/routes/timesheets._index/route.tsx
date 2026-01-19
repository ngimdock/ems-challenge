import { useLoaderData } from "react-router";
import { useState } from "react";
import { getDB } from "~/db/getDB";
import { TimesheetTable } from "./TimesheetTable";

export async function loader() {
  const db = await getDB();
  const timesheetsAndEmployees = await db.all(
    "SELECT timesheets.*, employees.id AS employee_id, employees.full_name AS employee_name, employees.department AS employee_department FROM timesheets JOIN employees ON timesheets.employee_id = employees.id",
  );

  return { timesheetsAndEmployees };
}

export default function TimesheetsPage() {
  const { timesheetsAndEmployees } = useLoaderData();

  console.log({ timesheetsAndEmployees });

  return (
    <div className="w-full">
      <TimesheetTable timesheetWithEmployee={timesheetsAndEmployees} />
    </div>
  );
}
