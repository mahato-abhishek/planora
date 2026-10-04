"use client";

import { ProjectType, TaskType } from "@/lib/types/types";
import { FC, useMemo, useState } from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCalendar2Line,
  RiCheckboxCircleLine,
  RiFlagLine,
  RiTaskLine,
} from "react-icons/ri";
import { geistSans, spaceMono } from "@/lib/fonts";

interface Props {
  taskData: TaskType[];
  projectData: ProjectType[];
}

type CalendarEvent = {
  id: string;
  title: string;
  date: Date;
  type: "task" | "project";
  priority: string;
  status?: string;
  projectName?: string;
};

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const dateKey = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

const sameDay = (first: Date, second: Date) =>
  dateKey(first) === dateKey(second);

const formatMonth = (date: Date) =>
  date.toLocaleDateString("en-IN", { month: "long", year: "numeric" });

const formatDate = (date: Date) =>
  date.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

const priorityClass = (priority: string) => {
  if (priority === "High") return "border-l-red-500";
  if (priority === "Medium") return "border-l-yellow-500";
  return "border-l-green-600";
};

const CalendarView: FC<Props> = ({ taskData, projectData }) => {
  const today = new Date();
  const [month, setMonth] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1),
  );
  const [selectedDate, setSelectedDate] = useState(today);

  const events = useMemo<CalendarEvent[]>(
    () => [
      ...projectData.map((project) => ({
        id: `project-${project.id}`,
        title: project.project_name,
        date: project.deadline,
        type: "project" as const,
        priority: project.priority,
      })),
      ...taskData.map((task) => ({
        id: `task-${task.id}`,
        title: task.task_name,
        date: task.deadline,
        type: "task" as const,
        priority: task.priority,
        status: task.task_status,
        projectName: task.project_name,
      })),
    ],
    [projectData, taskData],
  );

  const calendarDays = useMemo(() => {
    const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
    const start = new Date(
      month.getFullYear(),
      month.getMonth(),
      1 - firstDay.getDay(),
    );

    return Array.from({ length: 42 }, (_, index) => {
      const day = new Date(start);
      day.setDate(start.getDate() + index);
      return day;
    });
  }, [month]);

  const selectedEvents = events.filter((event) =>
    sameDay(event.date, selectedDate),
  );

  const moveMonth = (offset: number) => {
    setMonth(
      (current) =>
        new Date(current.getFullYear(), current.getMonth() + offset, 1),
    );
  };

  const goToToday = () => {
    setMonth(new Date(today.getFullYear(), today.getMonth(), 1));
    setSelectedDate(today);
  };

  return (
    <div className={`${geistSans.className} min-w-0 pb-8`}>
      <header className="border-b border-mist-300 px-4 py-5 dark:border-mist-800 sm:px-6 sm:py-6">
        <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Your calendar
            </h1>
            <p className="mt-1 text-sm text-mist-600 dark:text-mist-400">
              See every deadline and task in one place.
            </p>
          </div>
          <button
            type="button"
            onClick={goToToday}
            className="w-full rounded-lg border border-mist-300 px-3 py-2 text-sm hover:bg-mist-200 dark:border-mist-700 dark:hover:bg-mist-800 sm:w-auto cursor-pointer"
          >
            Today
          </button>
        </div>
      </header>

      <main className="p-3 sm:p-6">
        <section className="overflow-hidden rounded-xl border border-mist-300 bg-mist-50 dark:border-mist-700 dark:bg-mist-950">
          <div className="flex items-center justify-between border-b border-mist-300 px-3 py-3 dark:border-mist-700 sm:px-5">
            <button
              type="button"
              aria-label="Previous month"
              onClick={() => moveMonth(-1)}
              className="rounded-lg border border-mist-300 p-2 hover:bg-mist-200 dark:border-mist-700 dark:hover:bg-mist-800 cursor-pointer"
            >
              <RiArrowLeftSLine size="18" />
            </button>
            <div className="flex items-center gap-2 text-base font-semibold sm:text-lg">
              <RiCalendar2Line size="19" />
              <h2>{formatMonth(month)}</h2>
            </div>
            <button
              type="button"
              aria-label="Next month"
              onClick={() => moveMonth(1)}
              className="rounded-lg border border-mist-300 p-2 hover:bg-mist-200 dark:border-mist-700 dark:hover:bg-mist-800 cursor-pointer"
            >
              <RiArrowRightSLine size="18" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[620px]">
              <div className="grid grid-cols-7 border-b border-mist-300 dark:border-mist-700">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className={`${spaceMono.className} px-2 py-3 text-center text-[10px] uppercase tracking-wide text-mist-500 sm:text-xs`}
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7">
                {calendarDays.map((day) => {
                  const dayEvents = events.filter((event) =>
                    sameDay(event.date, day),
                  );
                  const inMonth = day.getMonth() === month.getMonth();
                  const isSelected = sameDay(day, selectedDate);
                  const isToday = sameDay(day, today);

                  return (
                    <button
                      type="button"
                      key={dateKey(day)}
                      onClick={() => setSelectedDate(day)}
                      className={`group min-h-24 border-b border-r border-mist-200 p-2 text-left transition-colors dark:border-mist-800 sm:min-h-28 ${inMonth ? "" : "bg-mist-100/60 dark:bg-mist-900/50"} ${isSelected ? "bg-mist-200 dark:bg-mist-800" : "hover:bg-mist-100 dark:hover:bg-mist-900"}`}
                    >
                      <span
                        className={`flex size-6 items-center justify-center rounded-full text-xs ${isToday ? "bg-mist-950 font-bold text-white dark:bg-mist-50 dark:text-black" : inMonth ? "" : "text-mist-400"}`}
                      >
                        {day.getDate()}
                      </span>
                      <div className="mt-2 space-y-1">
                        {dayEvents.slice(0, 2).map((event) => (
                          <div
                            key={event.id}
                            className={`hidden truncate rounded border-l-2 bg-mist-200 px-1.5 py-1 text-[10px] dark:bg-mist-800 sm:block ${priorityClass(event.priority)}`}
                          >
                            {event.title}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <p className="hidden text-[10px] text-mist-500 sm:block">
                            +{dayEvents.length - 2} more
                          </p>
                        )}
                        {dayEvents.length > 0 && (
                          <div className="flex gap-1 sm:hidden">
                            {dayEvents.slice(0, 3).map((event) => (
                              <span
                                key={event.id}
                                className={`size-1.5 rounded-full ${event.type === "task" ? "bg-mist-950 dark:bg-mist-50" : "bg-mist-500"}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-xl border border-mist-300 bg-mist-50 dark:border-mist-700 dark:bg-mist-950">
          <div className="flex items-center justify-between border-b border-mist-300 px-4 py-4 dark:border-mist-700">
            <div>
              <p
                className={`${spaceMono.className} text-[10px] uppercase tracking-wide text-mist-500`}
              >
                Selected day
              </p>
              <h2 className="mt-1 text-lg font-semibold">
                {formatDate(selectedDate)}
              </h2>
            </div>
            <span className="text-sm text-mist-500">
              {selectedEvents.length}{" "}
              {selectedEvents.length === 1 ? "item" : "items"}
            </span>
          </div>
          <div className="divide-y divide-mist-200 dark:divide-mist-800">
            {selectedEvents.length === 0 ? (
              <div className="flex flex-col items-center px-4 py-10 text-center">
                <RiCheckboxCircleLine size="24" className="text-mist-400" />
                <p className="mt-2 text-sm font-medium">Nothing scheduled</p>
                <p className="mt-1 text-xs text-mist-500">This day is clear.</p>
              </div>
            ) : (
              selectedEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center gap-3 px-4 py-3"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-mist-200 dark:bg-mist-800">
                    {event.type === "task" ? (
                      <RiTaskLine size="17" />
                    ) : (
                      <RiFlagLine size="17" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">
                      {event.title}
                    </p>
                    <p className="truncate text-xs text-mist-500">
                      {event.type === "task"
                        ? `${event.projectName} · ${event.status}`
                        : "Project deadline"}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-mist-500">
                    {event.priority}
                  </span>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CalendarView;
