import { ChevronLeft } from "lucide-react";
import { useSearchParams } from "react-router";
import { Button } from "~/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import {
  cn,
  DEFAULT_LIMIT,
  DEFAULT_OFFSET,
  LIMIT_KEY,
  OFFSET_KEY,
} from "~/lib/utils";

type PaginateProps = {
  totalItems?: number;
};

export function Paginate({ totalItems }: PaginateProps) {
  const search = typeof window !== "undefined" ? window.location.search : "";

  const params = new URLSearchParams(search);

  const offset = params.get(OFFSET_KEY);
  const limit = params.get(LIMIT_KEY);

  const offsetValue = parseInt(offset || DEFAULT_OFFSET.toString());
  const limitValue = parseInt(limit || DEFAULT_LIMIT.toString());

  const totalPages = totalItems ? Math.ceil(totalItems / limitValue) : 1;

  function onPageChange(newPage: number) {
    params.set(LIMIT_KEY, limitValue.toString());
    params.set(OFFSET_KEY, newPage.toString());

    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`,
    );

    window.location.reload();
  }

  console.log({
    offsetValue,
    limitValue,
    test: offsetValue === 0,
  });

  return (
    <Pagination className="flex justify-end mt-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(Math.max(0, offsetValue - limitValue))}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={page === Math.floor(offsetValue / limitValue) + 1}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {totalPages > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            onClick={() =>
              onPageChange(
                Math.min(
                  offsetValue + limitValue,
                  (totalPages - 1) * limitValue,
                ),
              )
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
