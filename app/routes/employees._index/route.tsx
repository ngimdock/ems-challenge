import { useLoaderData } from "react-router";
import { getDB } from "~/db/getDB";
import { EmployeeHeader } from "./EmployeeHeader";
import { EmployeeTable } from "./EmployeeTable";
import {
  DEFAULT_LIMIT,
  DEFAULT_OFFSET,
  LIMIT_KEY,
  OFFSET_KEY,
  SEARCH_KEY,
} from "~/lib/utils";
import { Paginate } from "./Pagination";
import { findEmployeesQuery } from "./queries";

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);

  const offset = parseInt(
    url.searchParams.get(OFFSET_KEY) || DEFAULT_OFFSET.toString(),
  );

  const limit = parseInt(
    url.searchParams.get(LIMIT_KEY) || DEFAULT_LIMIT.toString(),
  );

  const searchText = url.searchParams.get(SEARCH_KEY);

  const searchPayload = searchText ? `%${searchText}%` : null;

  const db = await getDB();

  const employees = await db.all(findEmployeesQuery, [
    searchPayload,
    searchPayload,
    searchPayload,
    searchPayload,
    limit,
    offset,
  ]);

  console.log({
    offset,
    limit,
    searchText,
    employees,
  });

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
