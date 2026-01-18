"use client";

// import { resolveActionResult } from "@/lib/actions/actions-utils";
import { useMutation } from "@tanstack/react-query";
import { AlertCircle, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "@tanstack/react-form";

import { EmployeeFormSchema, type EmployeeFormSchemaType } from "./schema";
import { Field, FieldError, FieldLabel } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import type { p } from "node_modules/@react-router/dev/dist/routes-CZR-bKRt";

export const TantackForm = () => {
  const submit = useMutation({
    mutationFn: async ({ full_name }: EmployeeFormSchemaType) => {
      console.log({ full_name });
      // return resolveActionResult(addEmailAction({ email }));
    },
    onSuccess: () => {
      toast.success("Employee created successfully");
    },
    onError: () => {
      toast.error("An error occurred");
    },
  });

  const form = useForm({
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
    },
    validators: {
      onSubmit: EmployeeFormSchema,
    },
    onSubmit: async ({ value }) => {
      console.log({ value });
    },
  });

  return (
    <Card className="w-full sm:max-w-lg mx-auto mt-8">
      <CardHeader>
        <CardTitle>Create Employee</CardTitle>
        <CardDescription>
          Fill the form to create a new employee
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="bug-report-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <div className="flex items-center flex-col gap-3">
            <form.Field
              name="full_name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="John Doe"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="email"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="monemail@gmail.com"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="phone"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="+1234567890"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <Field orientation="horizontal">
              <Button type="submit" form="bug-report-form">
                Create Employee
              </Button>
            </Field>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
