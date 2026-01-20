import { Link, useSearchParams } from "react-router";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useDebounceFn } from "~/hooks/use-debounde";
import { SEARCH_KEY } from "~/lib/utils";

export const EmployeeHeader = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTextParam = searchParams.get(SEARCH_KEY) || "";

  const [searchText, setSearchText] = useState(searchTextParam ?? "");

  const handleReplaceSearchtext = (text: string) => {
    setSearchParams(text ? { search: text } : {}, { replace: true });
  };

  const handleSetSearchParam = useDebounceFn((value: string) => {
    handleReplaceSearchtext(value);
  }, 400);

  useEffect(() => {
    setSearchText(searchTextParam);
  }, [searchParams]);

  return (
    <div className="flex items-center py-4 justify-between">
      <div className="flex items-center gap-2 w-2xl">
        <Input
          type="text"
          placeholder="Filter by name, email, job title"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);

            handleSetSearchParam(event.target.value);
          }}
          className="max-w-sm"
        />
        {searchTextParam && (
          <Button
            variant="outline"
            type="button"
            onClick={() => handleReplaceSearchtext("")}
          >
            <X />
          </Button>
        )}
      </div>

      <Link to="/employees/new" className="ml-2 inline-block">
        <Button variant="default" className="ml-auto">
          <Plus className="h-4 w-4" /> Create Employee
        </Button>
      </Link>
    </div>
  );
};
