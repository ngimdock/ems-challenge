import { useLoaderData } from "react-router";
import { getDB } from "~/db/getDB";
import { EmployeesTable } from "./EmployeesTable";

export async function loader() {
  const db = await getDB();
  const employees = await db.all("SELECT * FROM employees;");

  return { employees };
}

export default function EmployeesPage() {
  const { employees } = useLoaderData<typeof loader>();

  console.log({ employees });

  return (
    <div>
      <EmployeesTable employeesData={employees} />
    </div>
  );
}
