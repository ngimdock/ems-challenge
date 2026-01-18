export const createEmployeeQuery = `
    INSERT INTO employees (
      full_name,
      email,
      phone,
      date_of_birth,
      job_title,
      department,
      salary,
      start_date,
      end_date
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
