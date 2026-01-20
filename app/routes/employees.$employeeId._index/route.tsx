import { useLoaderData } from "react-router";
import { getDB } from "~/db/getDB";
import ProfileSection from "./ProfileSection";
import { BackRedirectionComponent } from "~/components/BackRedirectionComponent";

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

  if (!employee) return <div>Employee not found</div>;

  return (
    <div>
      <BackRedirectionComponent text="All Employees" link="/employees" />
      <ProfileSection employee={employee} />;
    </div>
  );
}
