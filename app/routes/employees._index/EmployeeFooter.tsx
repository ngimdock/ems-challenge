import { Button } from "~/components/ui/button";
import { CustomPagination } from "./Pagination";
import { PaginateComponent } from "./PaginateComponent";

export const EmployeeFooter = () => {
  return (
    <div className="mt-6">
      <PaginateComponent />
      {/* <CustomPagination /> */}
    </div>
  );
};
