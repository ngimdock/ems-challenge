import { useLoaderData } from "react-router";
import { getDB } from "~/db/getDB";
import { Button } from "~/components/ui/button";
import { EmployeeHeader } from "./EmployeeHeader";
import { EmployeeTable } from "./EmployeeTable";
import { EmployeeFooter } from "./EmployeeFooter";

export async function loader() {
  const db = await getDB();
  const employees = await db.all(
    "SELECT * FROM employees ORDER BY created_at DESC;",
  );

  return { employees };
}

export default function EmployeesPage() {
  const { employees } = useLoaderData<typeof loader>();

  console.log({ employees });

  return (
    <div className="w-full">
      <EmployeeHeader />
      <EmployeeTable employeesData={employees} />
      <EmployeeFooter />
    </div>
  );
}
