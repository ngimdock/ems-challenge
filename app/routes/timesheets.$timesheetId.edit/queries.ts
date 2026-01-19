export const updateTimesheetQuery = `
  UPDATE timesheets
  SET
    employee_id = ?,
    start_time = ?,
    end_time = ?,
    summary = ?
  WHERE id = ?;
`;
