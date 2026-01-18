export type EmployeeType = {
  id: number;
  full_name: string;
  email: string;
  phone: string | null;
  date_of_birth: string; // YYYY-MM-DD
  job_title: string;
  salary: number | null;
  department: string;
  start_date: string; // YYYY-MM-DD
  end_date: string | null;
  created_at: string; // ISO datetime
};
