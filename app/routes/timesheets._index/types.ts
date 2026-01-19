export type TimesheetType = {
  id: number;
  employee_id: number;
  start_time: string;
  end_time: string;
  summary: string | null;
  created_at: string;
};

export type TimesheetWithEmployee = TimesheetType & {
  employee_name: string;
  employee_department: string;
};
