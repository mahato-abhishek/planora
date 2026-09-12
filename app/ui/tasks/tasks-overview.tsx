"use client";
import Header from "@/app/components/header";
import { FaTasks } from "react-icons/fa";
import { useState } from "react";
import { NewTask } from "./new-task";
import { ProjectType, TaskType } from "@/lib/types/types";
import { FC } from "react";

import { spaceMono } from "@/lib/fonts";
import { AllTasks } from "./all-tasks";
import { deleteTask, editTaskStatus } from "@/lib/actions/actions";

interface Props {
  taskData: TaskType[];
  projectData: ProjectType[];
}
const catagories = ["All Tasks", "To do", "In Progress", "In Review", "Done"];
const TaskView: FC<Props> = ({ taskData, projectData }) => {
  const [taskOpen, setTaskOpen] = useState(false);
  const [active, setActive] = useState("All Tasks");

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

  return (
    <div>
      <Header name="Tasks" icon={<FaTasks />} />
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center justify-center gap-2 bg-mist-100 border dark:border-mist-700 border-mist-300 dark:bg-mist-800 rounded-full p-1">
          {catagories.map((category) => (
            <button
              key={category}
              className={
                active == category
                  ? `text-sm pointer dark:bg-mist-950 bg-mist-300 border dark:border-mist-800 border-mist-400  rounded-full py-1 px-2`
                  : `text-sm pinter rounded-full py-1 px-2`
              }
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <button
          onClick={() => setTaskOpen(true)}
          className="bg-mist-950 dark:bg-mist-50 dark:hover:bg-mist-200 dark:text-black text-white rounded-lg px-4 py-2 text-sm hover:bg-mist-800"
        >
          + New Task
        </button>
      </div>
      <div className="fit w-full p-4 space-y-1">
        <div
          className={`${spaceMono.className} border-2 py-2 px-4 h-full rounded-t-xl w-full grid grid-cols-17 gap-2 items-center  bg-mist-100 dark:border-mist-700 border-mist-300 dark:bg-mist-900 text-mist-500  text-sm `}
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
        {tasks
          ?.filter(
            (task) =>
              (active === "All Tasks" && task.task_status != "Done") ||
              task.task_status === active,
          )
          .map((task) => (
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
              changeStatus={changeTaskStatus}
            />
          ))}
      </div>

      {taskOpen && (
        <NewTask
          closeTask={setTaskOpen}
          projectData={projectData}
          taskData={taskData}
          addTask={setTasks}
        />
      )}
    </div>
  );
};

export default TaskView;
