import { useLoaderData } from "react-router";
import { getDB } from "~/db/getDB";
import { EmployeeHeader } from "./EmployeeHeader";
import { EmployeeTable } from "./EmployeeTable";
import { EmployeeFooter } from "./EmployeeFooter";
import { DEFAULT_LIMIT } from "~/lib/utils";

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);

  const offset = parseInt(url.searchParams.get("offset") || "0");

  const limit = parseInt(
    url.searchParams.get("limit") || DEFAULT_LIMIT.toString(),
  );

  const db = await getDB();

  const employees = await db.all(
    " SELECT * FROM employees ORDER BY created_at DESC LIMIT ? OFFSET ?;",
    [limit, offset],
  );

  return { employees };
}

export default function EmployeesPage() {
  const { employees } = useLoaderData();

  return (
    <div className="w-full">
      <EmployeeHeader />
      <EmployeeTable employeesData={employees} />

      <EmployeeFooter />
    </div>
  );
}
