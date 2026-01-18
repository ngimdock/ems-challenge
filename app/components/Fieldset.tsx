import type { PropsWithChildren } from "react";
import { cn } from "~/lib/utils";
import { Typography } from "./typography";

export type FieldsetProps = PropsWithChildren<{
  title: string;
  icon?: React.ReactNode;
  className?: string;
}>;

export const Fieldset = (props: FieldsetProps) => {
  return (
    <fieldset className={cn(" w-full  rounded-lg border p-4", props.className)}>
      <legend className="flex items-center gap-1.5 px-1 text-sm font-medium">
        {props.icon}
        <Typography>{props.title}</Typography>
      </legend>

      <div>{props.children}</div>
    </fieldset>
  );
};
