import { useParams } from "react-router";

export async function loader() {
  return {};
}

export default function EmployeePage() {
  const params = useParams();

  console.log({ params });

  return (
    <div>
      <div>To implement</div>
      <ul>
        <li>
          <a href="/employees">Employees</a>
        </li>
        <li>
          <a href="/employees/new">New Employee</a>
        </li>
        <li>
          <a href="/timesheets/">Timesheets</a>
        </li>
      </ul>
    </div>
  );
}
