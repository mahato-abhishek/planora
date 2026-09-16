"use client";

import { TaskType } from "@/lib/types/types";
import { useState } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  PointerSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import {
  RiCalendarLine,
  RiCheckLine,
  RiDeleteBinLine,
  RiDragMove2Line,
  RiEditLine,
  RiFlagLine,
  RiProgress1Line,
  RiTimeLine,
} from "react-icons/ri";

const columns = [
  {
    name: "To Do",
    icon: <RiTimeLine size="17" />,
    description: "Ready to start",
  },
  {
    name: "In Progress",
    icon: <RiProgress1Line size="17" />,
    description: "Currently active",
  },
  {
    name: "In Review",
    icon: <RiFlagLine size="17" />,
    description: "Needs a decision",
  },
  {
    name: "Done",
    icon: <RiCheckLine size="17" />,
    description: "Completed work",
  },
];

const priorityStyles: Record<string, string> = {
  High: "border-red-200 bg-red-50 text-red-700 dark:border-red-950 dark:bg-red-950/50 dark:text-red-300",
  Medium:
    "border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-950 dark:bg-yellow-950/50 dark:text-yellow-300",
  Low: "border-green-200 bg-green-50 text-green-700 dark:border-green-950 dark:bg-green-950/50 dark:text-green-300",
};

interface Props {
  tasks: TaskType[];
  deleteTask: (id: number) => void;
  editTask: (task: TaskType) => void;
  changeStatus: (id: number, status: string) => void;
}

export const KanbanBoard = ({
  tasks,
  deleteTask,
  editTask,
  changeStatus,
}: Props) => {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
  );
  const [activeTask, setActiveTask] = useState<TaskType | null>(null);

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    setActiveTask(null);
    if (!over) return;
    const task = tasks.find((item) => item.id === Number(active.id));
    const nextStatus = String(over.id);
    if (
      task &&
      task.task_status !== nextStatus &&
      columns.some((column) => column.name === nextStatus)
    ) {
      changeStatus(task.id, nextStatus);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={({ active }) =>
        setActiveTask(
          tasks.find((task) => task.id === Number(active.id)) ?? null,
        )
      }
      onDragCancel={() => setActiveTask(null)}
      onDragEnd={handleDragEnd}
    >
      <div className="grid min-w-0 grid-cols-1 gap-4 p-3 sm:grid-cols-2 sm:p-6 xl:grid-cols-4">
        {columns.map((column) => (
          <KanbanColumn
            key={column.name}
            column={column}
            tasks={tasks.filter((task) => task.task_status === column.name)}
            deleteTask={deleteTask}
            editTask={editTask}
            changeStatus={changeStatus}
          />
        ))}
      </div>
      <DragOverlay dropAnimation={null}>
        {activeTask ? <TaskCard task={activeTask} isOverlay /> : null}
      </DragOverlay>
    </DndContext>
  );
};

const KanbanColumn = ({
  column,
  tasks,
  deleteTask,
  editTask,
  changeStatus,
}: {
  column: (typeof columns)[number];
  tasks: TaskType[];
  deleteTask: (id: number) => void;
  editTask: (task: TaskType) => void;
  changeStatus: (id: number, status: string) => void;
}) => {
  const { isOver, setNodeRef } = useDroppable({ id: column.name });

  return (
    <section className="min-w-0 rounded-xl border border-mist-300 bg-mist-100/70 dark:border-mist-700 dark:bg-mist-900/70">
      <header className="border-b border-mist-300 px-4 py-4 dark:border-mist-700">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-mist-200 text-mist-700 dark:bg-mist-800 dark:text-mist-200">
              {column.icon}
            </span>
            <div className="min-w-0">
              <h2 className="truncate text-sm font-semibold">{column.name}</h2>
              <p className="truncate text-[11px] text-mist-500">
                {column.description}
              </p>
            </div>
          </div>
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-mist-300 text-xs font-semibold dark:border-mist-700">
            {tasks.length}
          </span>
        </div>
      </header>
      <div
        ref={setNodeRef}
        className={`min-h-44 space-y-3 p-3 transition-colors ${isOver ? "bg-mist-200/80 dark:bg-mist-800/80" : ""}`}
      >
        {tasks.length === 0 ? (
          <div
            className={`flex min-h-36 items-center justify-center rounded-lg border border-dashed text-center text-xs ${isOver ? "border-mist-600 text-mist-700 dark:border-mist-300 dark:text-mist-200" : "border-mist-300 text-mist-500 dark:border-mist-700"}`}
          >
            {isOver ? "Release to move task" : "No tasks here yet"}
          </div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              editTask={editTask}
              changeStatus={changeStatus}
            />
          ))
        )}
      </div>
    </section>
  );
};

const TaskCard = ({
  task,
  deleteTask,
  editTask,
  changeStatus,
  isOverlay = false,
}: {
  task: TaskType;
  deleteTask?: (id: number) => void;
  editTask?: (task: TaskType) => void;
  changeStatus?: (id: number, status: string) => void;
  isOverlay?: boolean;
}) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: task.id });
  const style = { transform: CSS.Translate.toString(transform) };

  return (
    <article
      ref={setNodeRef}
      style={style}
      className={`rounded-xl border border-mist-300 bg-mist-50 p-3.5 dark:border-mist-700 dark:bg-mist-950 ${isDragging ? "opacity-30" : ""} ${isOverlay ? "w-72 rotate-2 shadow-2xl" : ""}`}
    >
      <div className="flex items-start gap-2">
        <button
          type="button"
          {...listeners}
          {...attributes}
          aria-label={`Drag ${task.task_name}`}
          className="mt-0.5 cursor-grab touch-none rounded-md p-1 text-mist-400 hover:bg-mist-200 active:cursor-grabbing dark:hover:bg-mist-800"
        >
          <RiDragMove2Line size="17" />
        </button>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="min-w-0 break-words text-sm font-semibold">
              {task.task_name}
            </h3>
            <span
              className={`shrink-0 rounded-full border px-2 py-1 text-[10px] font-semibold uppercase ${priorityStyles[task.priority] ?? "border-mist-300 text-mist-500"}`}
            >
              {task.priority}
            </span>
          </div>
          <p className="mt-2 line-clamp-2 min-h-10 break-words text-xs leading-5 text-mist-600 dark:text-mist-400">
            {task.description || "No description"}
          </p>
          <div className="mt-3 flex items-center justify-between gap-2 border-t border-mist-200 pt-3 text-[11px] text-mist-500 dark:border-mist-800">
            <span className="flex min-w-0 items-center gap-1 truncate">
              <RiFlagLine size="13" /> {task.project_name}
            </span>
            <span className="flex shrink-0 items-center gap-1">
              <RiCalendarLine size="13" />{" "}
              {task.deadline.toLocaleDateString("en-IN")}
            </span>
          </div>
          {!isOverlay && changeStatus && deleteTask && editTask && (
            <div className="mt-3 flex items-center gap-1.5">
              <select
                aria-label={`Change status for ${task.task_name}`}
                value={task.task_status}
                onChange={(event) => changeStatus(task.id, event.target.value)}
                className="min-w-0 flex-1 rounded-lg border border-mist-300 bg-transparent px-2 py-1.5 text-xs dark:border-mist-700"
              >
                {columns.map((status) => (
                  <option key={status.name} value={status.name}>
                    {status.name}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => editTask(task)}
                aria-label={`Edit ${task.task_name}`}
                className="rounded-lg border border-mist-300 p-1.5 hover:bg-mist-200 dark:border-mist-700 dark:hover:bg-mist-800"
              >
                <RiEditLine size="16" />
              </button>
              <button
                type="button"
                onClick={() => deleteTask(task.id)}
                aria-label={`Delete ${task.task_name}`}
                className="rounded-lg border border-mist-300 p-1.5 text-red-600 hover:bg-red-50 dark:border-mist-700 dark:hover:bg-red-950/30"
              >
                <RiDeleteBinLine size="16" />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
