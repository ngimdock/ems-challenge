import { useLoaderData } from "react-router";
import { getDB } from "~/db/getDB";
import { TimesheetTable } from "./TimesheetTable";
import { TimesheetHeader } from "./TimesheetHeader";
import { findAllTimesheetsWithEmployeesQuery } from "./queries";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export async function loader() {
  const db = await getDB();
  const timesheetsAndEmployees = await db.all(
    findAllTimesheetsWithEmployeesQuery,
  );

  return { timesheetsAndEmployees };
}

export default function TimesheetsPage() {
  const { timesheetsAndEmployees } = useLoaderData();

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
        </TabsContent>
        <TabsContent value="calendar">
          <div>Display calendar to implement</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
