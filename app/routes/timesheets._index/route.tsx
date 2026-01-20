import { useLoaderData } from "react-router";
import { getDB } from "~/db/getDB";
import { TimesheetTable } from "./TimesheetTable";
import { TimesheetHeader } from "./TimesheetHeader";
import { findAllTimesheetsWithEmployeesQuery } from "./queries";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Paginate } from "../employees._index/Pagination";
import {
  DEFAULT_EMPLOYEES_LIMIT,
  DEFAULT_OFFSET,
  DEFAULT_TIMESHEETS_LIMIT,
  LIMIT_KEY,
  OFFSET_KEY,
} from "~/lib/utils";

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);

  const offset = parseInt(
    url.searchParams.get(OFFSET_KEY) || DEFAULT_OFFSET.toString(),
  );

  const limit = parseInt(
    url.searchParams.get(LIMIT_KEY) || DEFAULT_TIMESHEETS_LIMIT.toString(),
  );

  const db = await getDB();

  const timesheetsAndEmployees = await db.all(
    findAllTimesheetsWithEmployeesQuery,
    [limit, offset],
  );

  const timesheetsCount = await db.get(
    " SELECT COUNT(*) as count FROM timesheets;",
  );

  return { timesheetsAndEmployees, timesheetsCount };
}

export default function TimesheetsPage() {
  const { timesheetsAndEmployees, timesheetsCount } = useLoaderData();

  return (
    <div className="w-full">
      <Tabs defaultValue="table">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="table">Table</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>
          <TimesheetHeader />
        </div>

        <TabsContent value="table">
          <TimesheetTable timesheetWithEmployee={timesheetsAndEmployees} />
          <Paginate
            totalItems={timesheetsCount.count}
            defaultLimit={DEFAULT_TIMESHEETS_LIMIT}
          />
        </TabsContent>
        <TabsContent value="calendar">
          <div>Display calendar to implement</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
