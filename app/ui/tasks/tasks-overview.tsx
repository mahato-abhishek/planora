"use client";
import { useState } from "react";
import { NewTask } from "./new-task";
import { ProjectType, TaskType } from "@/lib/types/types";
import { FC } from "react";

import { spaceMono } from "@/lib/fonts";
import { AllTasks } from "./all-tasks";
import { KanbanBoard } from "@/app/ui/tasks/kanban-board";
import { deleteTask, editTaskStatus } from "@/lib/actions/actions";
import { BsKanban, BsListUl } from "react-icons/bs";
import { RiAddLine } from "react-icons/ri";

interface Props {
  taskData: TaskType[];
  projectData: ProjectType[];
}
const catagories = ["All Tasks", "To Do", "In Progress", "In Review", "Done"];
type ViewMode = "list" | "kanban";
const TaskView: FC<Props> = ({ taskData, projectData }) => {
  const [taskOpen, setTaskOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<TaskType>();
  const [active, setActive] = useState("All Tasks");
  const [viewMode, setViewMode] = useState<ViewMode>("list");

  const [tasks, setTasks] = useState<TaskType[]>(taskData);

  const deleteTaskItem = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    deleteTask(id);
  };
  const changeTaskStatus = (id: number, status: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, task_status: status } : task,
      ),
    );
    editTaskStatus(id, status);
  };

  const visibleTasks = tasks.filter(
    (task) => active === "All Tasks" || task.task_status === active,
  );

  const openTaskEditor = (task: TaskType) => {
    setEditingTask(task);
    setTaskOpen(true);
  };

  return (
    <div className="min-w-0 pb-8">
      <header className="border-b border-mist-300 px-4 py-5 dark:border-mist-800 sm:px-6 sm:py-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p
              className={`${spaceMono.className} text-xs uppercase tracking-wide text-mist-500`}
            >
              Workspace / Tasks
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
              Keep work moving
            </h1>
            <p className="mt-1 max-w-xl text-sm text-mist-600 dark:text-mist-400">
              Organize priorities, update status, and see what needs attention
              next.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setEditingTask(undefined);
              setTaskOpen(true);
            }}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-mist-950 px-4 py-2.5 text-sm text-white hover:bg-mist-800 dark:bg-mist-50 dark:text-black dark:hover:bg-mist-200 sm:w-fit"
          >
            <RiAddLine size="18" />
            New task
          </button>
        </div>
      </header>

      <div className="flex flex-col gap-3 border-b border-mist-300 bg-mist-50/80 px-4 py-3 dark:border-mist-800 dark:bg-mist-950/80 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto pb-1">
          {catagories.map((category) => (
            <button
              type="button"
              key={category}
              className={`whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs transition-colors sm:text-sm ${active === category ? "border-mist-950 bg-mist-950 text-white dark:border-mist-50 dark:bg-mist-50 dark:text-black" : "border-transparent text-mist-600 hover:border-mist-300 hover:bg-mist-200 dark:text-mist-400 dark:hover:border-mist-700 dark:hover:bg-mist-800"}`}
              onClick={() => setActive(category)}
            >
              {category}
              {category === "All Tasks" && (
                <span className="ml-1.5 text-[10px] opacity-70">
                  {tasks.length}
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="flex w-full shrink-0 items-center justify-center gap-1 rounded-lg border border-mist-300 p-1 dark:border-mist-700 sm:w-fit">
          <button
            type="button"
            aria-label="List view"
            aria-pressed={viewMode === "list"}
            onClick={() => setViewMode("list")}
            className={`flex flex-1 items-center justify-center gap-1 rounded px-3 py-1.5 text-xs sm:flex-none sm:text-sm ${viewMode === "list" ? "bg-mist-200 dark:bg-mist-800" : ""}`}
          >
            <BsListUl size="16" /> List
          </button>
          <button
            type="button"
            aria-label="Kanban view"
            aria-pressed={viewMode === "kanban"}
            onClick={() => setViewMode("kanban")}
            className={`flex flex-1 items-center justify-center gap-1 rounded px-3 py-1.5 text-xs sm:flex-none sm:text-sm ${viewMode === "kanban" ? "bg-mist-200 dark:bg-mist-800" : ""}`}
          >
            <BsKanban size="16" /> Board
          </button>
        </div>
      </div>
      {viewMode === "kanban" ? (
        <KanbanBoard
          tasks={visibleTasks}
          deleteTask={deleteTaskItem}
          editTask={openTaskEditor}
          changeStatus={changeTaskStatus}
        />
      ) : (
        <div className="p-3 sm:p-6">
          <div className="overflow-x-auto rounded-xl border border-mist-300 dark:border-mist-700">
            <div className="min-w-[920px]">
              <div
                className={`${spaceMono.className} grid grid-cols-17 items-center gap-2 border-b border-mist-300 bg-mist-100 px-4 py-3 text-[11px] uppercase tracking-wide text-mist-500 dark:border-mist-700 dark:bg-mist-900`}
              >
                <p className="col-span-3 border-r dark:border-mist-700 border-mist-300 text-left font-semibold ">
                  Task Name
                </p>
                <p className="col-span-4 border-r dark:border-mist-700 border-mist-300 text-left font-semibold ">
                  Description
                </p>
                <p className="text-left col-span-3 border-r dark:border-mist-700 border-mist-300 font-semibold">
                  Project
                </p>
                <p className="text-left col-span-2 border-r dark:border-mist-700 border-mist-300 font-semibold">
                  Date (D/M/Y)
                </p>
                <p className="text-left col-span-2 border-r dark:border-mist-700 border-mist-300 font-semibold">
                  {" "}
                  Status
                </p>
                <p className="text-left col-span-2 border-r dark:border-mist-700 border-mist-300 font-semibold">
                  Priority
                </p>

                <p className="text-right col-span-1  dark:border-mist-700 border-mist-300 font-semibold">
                  Actions
                </p>
              </div>
              {visibleTasks.map((task) => (
                <AllTasks
                  key={task.id}
                  taskId={task.id}
                  taskName={task.task_name}
                  description={task.description}
                  projectName={task.project_name}
                  status={task.task_status}
                  priority={task.priority}
                  date={task.deadline.toLocaleDateString("en-IN")}
                  deleteTask={deleteTaskItem}
                  editTask={() => openTaskEditor(task)}
                  changeStatus={changeTaskStatus}
                />
              ))}
              {visibleTasks.length === 0 && (
                <div className="bg-mist-50 px-4 py-16 text-center dark:bg-mist-950">
                  <p className="font-medium">No tasks in this view</p>
                  <p className="mt-1 text-sm text-mist-500">
                    Create a task or choose another status filter.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {taskOpen && (
        <NewTask
          closeTask={setTaskOpen}
          projectData={projectData}
          addTask={setTasks}
          task={editingTask}
        />
      )}
    </div>
  );
};

export default TaskView;
