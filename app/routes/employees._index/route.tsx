import { useLoaderData } from "react-router";
import { DataTable } from "~/components/data-table";
import { Button } from "~/components/ui/button";
import { getDB } from "~/db/getDB";
import data from "~/lib/data.json";

export async function loader() {
  const db = await getDB();
  const employees = await db.all("SELECT * FROM employees;");

  return { employees };
}

export default function EmployeesPage() {
  const { employees } = useLoaderData();

  console.log({ employees });
  return <DataTable data={data} />;
}
