export const DEPARTMENTS = {
  HR: "HR",
  Engineering: "Engineering",
  Sales: "Sales",
  Finance: "Finance",
} as const;

export type DepartmentType = (typeof DEPARTMENTS)[keyof typeof DEPARTMENTS];
