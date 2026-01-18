import { useLoaderData } from "react-router";
import { getDB } from "~/db/getDB";
import ProfileSection from "./ProfileSection";

export async function loader({ params }: { params: { employeeId: string } }) {
  const db = await getDB();
  const employee = await db.get(
    "SELECT * FROM employees WHERE id = ?;",
    params.employeeId,
  );

  return { employee };
}

export default function EmployeePage() {
  const { employee } = useLoaderData();

  console.log({ employee });

  return <ProfileSection employee={employee} />;
}
