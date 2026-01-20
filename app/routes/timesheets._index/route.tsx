import { useLoaderData } from "react-router";
import { getDB } from "~/db/getDB";
import { TimesheetTable } from "./TimesheetTable";
import { TimesheetHeader } from "./TimesheetHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Paginate } from "../employees._index/Pagination";
import {
  DEFAULT_OFFSET,
  DEFAULT_TIMESHEETS_LIMIT,
  LIMIT_KEY,
  OFFSET_KEY,
} from "~/lib/utils";
import { TimesheetCalanderView } from "./TimesheetCalanderView";
import {
  findAllTimesheetsCalendarViewQuery,
  findAllTimesheetsTableViewQuery,
} from "./queries";

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);

  const offset = parseInt(
    url.searchParams.get(OFFSET_KEY) || DEFAULT_OFFSET.toString(),
  );

  const limit = parseInt(
    url.searchParams.get(LIMIT_KEY) || DEFAULT_TIMESHEETS_LIMIT.toString(),
  );

  const db = await getDB();

  const timesheetsForTableView = await db.all(findAllTimesheetsTableViewQuery, [
    limit,
    offset,
  ]);

  const timesheetsForCalendarView = await db.all(
    findAllTimesheetsCalendarViewQuery,
  );

  const timesheetsCount = await db.get(
    " SELECT COUNT(*) as count FROM timesheets;",
  );

  return {
    timesheetsForTableView,
    timesheetsForCalendarView,
    timesheetsCount,
  };
}

export default function TimesheetsPage() {
  const { timesheetsForTableView, timesheetsForCalendarView, timesheetsCount } =
    useLoaderData();

  const formatedEvents = timesheetsForCalendarView.map((event: any) => ({
    id: event.id,
    title: event.employee_name,
    start: event.start_time,
    end: event.end_time,
  }));

  return (
    <div className="w-full">
      <Tabs defaultValue="calendar">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="table">Table</TabsTrigger>
          </TabsList>
          <TimesheetHeader />
        </div>

        <TabsContent value="calendar">
          <TimesheetCalanderView events={formatedEvents} />
        </TabsContent>

        <TabsContent value="table">
          <TimesheetTable timesheetWithEmployee={timesheetsForTableView} />
          <Paginate
            totalItems={timesheetsCount.count}
            defaultLimit={DEFAULT_TIMESHEETS_LIMIT}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
