import { z } from "zod";

export const employeeFormSchema = z.object({
  full_name: z
    .string()
    .min(3, "Full name must be at least 3 characters.")
    .max(100, "Full name must be at most 100 characters."),

  // email: z.string().email("Invalid email address."),

  // phone: z
  //   .string()
  //   .nullable()
  //   .optional()
  //   .refine((val) => !val || /^\+?[1-9]\d{1,14}$/.test(val), {
  //     message: "Phone number must be a valid E.164 format.",
  //   }),

  // date_of_birth: z.string().refine((val) => !isNaN(Date.parse(val)), {
  //   message: "Date of birth must be a valid date.",
  // }),

  // job_title: z.string().min(2, "Job title is required."),

  // salary: z
  //   .number()
  //   .nullable()
  //   .optional()
  //   .refine((val) => !val || val >= 0, {
  //     message: "Salary must be a positive number.",
  //   }),

  // department: z.string(),

  // start_date: z.string().refine((val) => !isNaN(Date.parse(val)), {
  //   message: "Start date must be a valid date.",
  // }),

  // end_date: z
  //   .string()
  //   .nullable()
  //   .optional()
  //   .refine((val) => !val || !isNaN(Date.parse(val)), {
  //     message: "End date must be a valid date.",
  //   }),
});

export type EmployeeFormSchemaType = z.infer<typeof employeeFormSchema>;

export type EmployeeType = EmployeeFormSchemaType & {
  id: number;
  created_at: string;
};
