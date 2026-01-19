export const createTeimesheetQuery = `
  INSERT INTO timesheets (employee_id, start_time, end_time, summary)
  VALUES (?, ?, ?, ?)
`;
