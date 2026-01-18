import { getDB } from "~/db/getDB";
import type { EmployeeType } from "./types";

export const findEmployees = async () => {
  const db = await getDB();
  return db.all("SELECT * FROM employees;");
};

export async function findEmployeeById(
  id: number,
): Promise<EmployeeType | undefined> {
  const db = await getDB();
  return db.get<EmployeeType | undefined>(
    "SELECT * FROM employees WHERE id = ?",
    id,
  );
}
