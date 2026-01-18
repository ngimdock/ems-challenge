import { z } from "zod";

export const EmployeeFormSchema = z.object({
  full_name: z
    .string()
    .min(3, "Full name must be at least 3 characters.")
    .max(100, "Full name must be at most 100 characters."),

  email: z.email(),

  phone: z
    .string()
    // .nullable()
    // .optional()
    .refine((val) => !val || /^\+?[1-9]\d{1,14}$/.test(val), {
      message: "Invalid phone number format.",
    }),

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

export type EmployeeFormSchemaType = z.infer<typeof EmployeeFormSchema>;

export type EmployeeType = EmployeeFormSchemaType & {
  id: number;
  created_at: string;
};
