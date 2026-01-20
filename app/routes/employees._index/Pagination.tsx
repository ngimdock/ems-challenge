import { useSearchParams } from "react-router";
import { Button } from "~/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import { DEFAULT_OFFSET, LIMIT_KEY, OFFSET_KEY } from "~/lib/utils";

type PaginateProps = {
  totalItems: number;
  defaultLimit: number;
};

export function Paginate({ totalItems, defaultLimit }: PaginateProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const offset = searchParams.get(OFFSET_KEY);
  const limit = searchParams.get(LIMIT_KEY);

  const offsetValue = parseInt(offset || DEFAULT_OFFSET.toString());
  const limitValue = parseInt(limit || defaultLimit.toString());

  const totalPages = totalItems ? Math.ceil(totalItems / limitValue) : 1;

  function onPageChange(newPage: number) {
    setSearchParams(
      {
        [OFFSET_KEY]: newPage.toString(),
        [LIMIT_KEY]: limitValue.toString(),
      },
      { replace: true },
    );
  }

  return (
    <Pagination className="flex justify-end mt-4">
      <PaginationContent>
        <PaginationItem>
          <Button disabled={offsetValue === 0} variant="ghost">
            <PaginationPrevious
              onClick={() =>
                onPageChange(Math.max(0, offsetValue - limitValue))
              }
            />
          </Button>
        </PaginationItem>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={
                page === Math.ceil((offsetValue + limitValue) / limitValue)
              }
              onClick={() => {
                onPageChange((page - 1) * limitValue);
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <Button
            disabled={offsetValue + limitValue >= totalItems}
            variant="ghost"
          >
            <PaginationNext
              onClick={() => onPageChange(offsetValue + limitValue)}
            />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
