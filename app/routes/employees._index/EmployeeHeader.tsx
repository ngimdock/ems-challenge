import { Link } from "react-router";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useDebounceFn } from "~/hooks/use-debounde";
import { SEARCH_KEY } from "~/lib/utils";

export const EmployeeHeader = () => {
  const [search, setSearch] = useState("");

  const handleSetSearchParam = useDebounceFn((value: string) => {
    const search = typeof window !== "undefined" ? window.location.search : "";

    const params = new URLSearchParams(search);

    params.set(SEARCH_KEY, value);

    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`,
    );

    window.location.reload();
  }, 400);

  return (
    <div className="flex items-center py-4 justify-between">
      <Input
        type="text"
        placeholder="Filter emails..."
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);

          handleSetSearchParam(event.target.value);
        }}
        className="max-w-sm"
      />

      <Link to="/employees/new" className="ml-2 inline-block">
        <Button variant="default" className="ml-auto">
          <Plus className="h-4 w-4" /> Create Employee
        </Button>
      </Link>
    </div>
  );
};
