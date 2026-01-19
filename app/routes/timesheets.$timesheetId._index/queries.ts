export const findTimesheetWithEmployeeQuery = `
  SELECT 
    timesheets.*,
    employees.id AS employee_id,
    employees.full_name AS employee_name,
    employees.department AS employee_department
  FROM timesheets
  JOIN employees 
    ON timesheets.employee_id = employees.id
  WHERE timesheets.id = ?;
`;
