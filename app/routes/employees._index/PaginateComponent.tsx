"use client";

import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from "@tabler/icons-react";
import { replace, useParams } from "react-router";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "~/lib/utils";

type PaginateComponentProps = {
  employeeCount: number;
};

export const PaginateComponent = ({
  employeeCount,
}: PaginateComponentProps) => {
  const { offset, limit } = useParams();

  // const params = new URLSearchParams(window.location.search);

  // const offset = params.get("offset");
  // const limit = params.get("limit");

  const offsetValue = parseInt(offset || DEFAULT_OFFSET.toString());
  const limitValue = parseInt(limit || DEFAULT_LIMIT.toString());

  const onLimitChange = ({
    newLimit,
    newOffset,
  }: {
    newLimit?: number;
    newOffset?: number;
  }) => {
    const params = new URLSearchParams(window.location.search);

    params.set("limit", newLimit?.toString() || limitValue.toString());
    params.set("offset", newOffset?.toString() || offsetValue.toString());

    // replace(`?${params.toString()}`);

    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`,
    );

    window.location.reload();
  };

  return (
    <div className="flex items-center justify-between px-4 mt-4">
      <div className="text-muted-foreground hidden flex-1 text-sm lg:flex">
        4 of 10 row(s) selected.
      </div>
      <div className="flex w-full items-center gap-8 lg:w-fit">
        <div className="hidden items-center gap-2 lg:flex">
          <Label htmlFor="rows-per-page" className="text-sm font-medium">
            Rows per page
          </Label>
          <Select
            value={limitValue.toString()}
            onValueChange={(value) => {
              onLimitChange({
                newLimit: Number(value),
              });
            }}
          >
            <SelectTrigger size="sm" className="w-20" id="rows-per-page">
              <SelectValue placeholder={limitValue.toString()} />
            </SelectTrigger>
            <SelectContent
              side="top"
              onChange={(value) => onLimitChange({ newLimit: Number(value) })}
            >
              {[DEFAULT_LIMIT, 8, 10].map((pageSize) => (
                <SelectItem key={pageSize} value={pageSize.toString()}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-fit items-center justify-center text-sm font-medium">
          Page {Math.floor(offsetValue / limitValue) + 1} of{" "}
          {Math.ceil(employeeCount / limitValue) || 1}
        </div>
        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Button
            variant="outline"
            className="size-8"
            size="icon"
            onClick={() => {
              // return table.previousPage();

              onLimitChange({
                newOffset: offsetValue,
              });
            }}
            disabled={
              // !table.getCanPreviousPage()
              false
            }
          >
            <span className="sr-only">Go to previous page</span>
            <IconChevronLeft />
          </Button>
          <Button
            variant="outline"
            className="size-8"
            size="icon"
            onClick={() => {
              // return table.nextPage();
              onLimitChange({
                newOffset: offsetValue + limitValue,
              });
            }}
            disabled={
              // !table.getCanNextPage()
              false
            }
          >
            <span className="sr-only">Go to next page</span>
            <IconChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
