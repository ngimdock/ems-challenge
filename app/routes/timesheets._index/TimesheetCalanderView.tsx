import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import "temporal-polyfill/global";
import "@schedule-x/theme-default/dist/index.css";
import { useEffect, useState } from "react";

type EventType = {
  id: string;
  title: string;
  start: string;
  end: string;
};

type TimesheetCalanderViewProps = {
  events: EventType[];
};

export const TimesheetCalanderView = ({
  events,
}: TimesheetCalanderViewProps) => {
  const formatedEvents = events.map((event) => ({
    ...event,
    start: Temporal.ZonedDateTime.from(event.start),
    end: Temporal.ZonedDateTime.from(event.end),
  }));

  const eventsService = useState(() => createEventsServicePlugin())[0];

  const calendar = useCalendarApp({
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    events: [...formatedEvents],
    plugins: [eventsService],
  });

  useEffect(() => {
    eventsService.getAll();
  }, []);

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
};
