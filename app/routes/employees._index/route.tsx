import { useLoaderData } from "react-router";
import { getDB } from "~/db/getDB";
import { EmployeeHeader } from "./EmployeeHeader";
import { EmployeeTable } from "./EmployeeTable";
import {
  DEFAULT_LIMIT,
  DEFAULT_OFFSET,
  LIMIT_KEY,
  OFFSET_KEY,
} from "~/lib/utils";
import { PaginateComponent } from "./PaginateComponent";
import { Paginate } from "./Pagination";

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);

  const offset = parseInt(
    url.searchParams.get(OFFSET_KEY) || DEFAULT_OFFSET.toString(),
  );

  const limit = parseInt(
    url.searchParams.get(LIMIT_KEY) || DEFAULT_LIMIT.toString(),
  );

  const db = await getDB();

  const employees = await db.all(
    " SELECT * FROM employees ORDER BY created_at DESC LIMIT ? OFFSET ?;",
    [limit, offset],
  );

  const employeeCount = await db.get(
    " SELECT COUNT(*) as count FROM employees;",
  );

  return { employees, employeeCount };
}

export default function EmployeesPage() {
  const { employees, employeeCount } = useLoaderData();

  return (
    <div className="w-full">
      <EmployeeHeader />
      <EmployeeTable employeesData={employees} />
      <Paginate totalItems={employeeCount.count} />
    </div>
  );
}
