export const findEmployeesQuery = `
  SELECT *
  FROM employees
  WHERE
    (? IS NULL OR full_name LIKE ? OR email LIKE ? OR job_title LIKE ?)
  ORDER BY created_at DESC
  LIMIT ?
  OFFSET ?;
  `;
