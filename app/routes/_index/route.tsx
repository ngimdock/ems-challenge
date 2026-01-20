import { redirect, useLoaderData } from "react-router";

import { SectionCards } from "~/components/section-cards";
import { CustomCard } from "./CustomCard";
import { getDB } from "~/db/getDB";

export async function loader() {
  // This redirects to the employees page.
  // If you want to create a home page with navigation buttons
  // to the employees page, you can remove the redirection.
  // return redirect("/employees");

  const db = await getDB();

  const employeesCount = await db.get(
    " SELECT COUNT(*) as count FROM employees;",
  );

  const timesheetsCount = await db.get(
    " SELECT COUNT(*) as count FROM timesheets;",
  );

  return { employeesCount, timesheetsCount };
}

export default function RootPage() {
  const { employeesCount, timesheetsCount } = useLoaderData();

  return (
    <div className="grid grid-cols-4 gap-4">
      <CustomCard
        count={employeesCount.count}
        title="Employees"
        description="Total employees"
        link="/employees"
      />
      <CustomCard
        count={timesheetsCount.count}
        title="Timesheets"
        description="Total timesheets"
        link="/timesheets"
      />
    </div>
  );
}
