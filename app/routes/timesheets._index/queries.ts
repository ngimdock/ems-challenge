export const findAllTimesheetsTableViewQuery = `
  SELECT timesheets.*, employees.id AS employee_id, employees.full_name AS employee_name, employees.department AS employee_department
  FROM timesheets
  JOIN employees ON timesheets.employee_id = employees.id
  ORDER BY timesheets.created_at DESC
  LIMIT ?
  OFFSET ?;
`;

export const findAllTimesheetsCalendarViewQuery = `
  SELECT timesheets.*, employees.id AS employee_id, employees.full_name AS employee_name
  FROM timesheets
  JOIN employees ON timesheets.employee_id = employees.id
  ORDER BY timesheets.created_at DESC;
`;
