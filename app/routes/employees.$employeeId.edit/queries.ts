export const UpdateEmployeeQuery = `
    UPDATE employees 
    SET
      full_name = ?,
      email = ?,
      phone = ?,
      date_of_birth = ?,
      job_title = ?,
      department = ?,
      salary = ?,
      start_date = ?,
      end_date = ?
    WHERE id = ?;
    `;
