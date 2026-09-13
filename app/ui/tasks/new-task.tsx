import { Modal } from "@/app/components/modal/Modal";
import useClickOutside from "@/app/components/modal/useClickOutside";
import { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";

import { createTask, getProjectData, getTaskData } from "@/lib/actions/actions";
import { ProjectType, TaskType } from "@/lib/types/types";

export const NewTask = ({
  closeTask,
  taskData,
  projectData,
  addTask,
}: {
  closeTask: React.Dispatch<React.SetStateAction<boolean>>;
  addTask: React.Dispatch<React.SetStateAction<TaskType[]>>;
  projectData: ProjectType[];
  taskData: TaskType[];
}) => {
  const searchboxRef = useRef<HTMLDivElement>(null!);
  useClickOutside(searchboxRef, () => closeTask(false));
  const [task, setTask] = useState("");
  const [projectName, setProjectName] = useState(projectData[0]?.project_name);
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");

  const submitData = async (formData: FormData) => {
    const data = {
      taskName: formData.get("taskName"),
      project: formData.get("project"),
      date: formData.get("date"),
      priority: formData.get("priority"),
      description: formData.get("description"),
      status: formData.get("status"),
      projectId: projectData
        .filter((project) => project.project_name === projectName)
        .map((project) => project.id)
        .join(""),
    };

    try {
      createTask(
        data.taskName as string,
        data.priority as string,
        new Date(data.date as string),
        data.status as string,
        data.description as string,
        Number(data.projectId),
        projectName,
      );
      closeTask(false);
      const taskData = await getTaskData();
      addTask(taskData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal>
      <div
        className=" dark:bg-mist-950 dark:brightness-140   gap-2 h-fit flex justify-left flex-col  w-200  rounded-[20px] outline outline-mist-400 dark:outline-mist-800 p-1 bg-mist-300"
        ref={searchboxRef}
      >
        <div className="h-full w-full border dark:border-mist-800 border-mist-300 rounded-2xl p-3 bg-mist-100 dark:bg-mist-900">
          <div className="flex items-cetner justify-between p-3">
            <p className="font-semibold ">Create New Task</p>
            <button
              onClick={() => closeTask(false)}
              className="border dark:border-gray-700 border-mist-400  p-1 rounded-full"
            >
              <RxCross2 size="16" />
            </button>
          </div>
          <form action={submitData}>
            <div className="border p-2 border-mist-300 rounded-lg dark:border-mist-700">
              <div className="grid grid-cols-2 gap-5 py-4 px-2 ">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="taskName"
                    className="text-mist-600 dark:text-mist-400"
                  >
                    Task Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="border px-2 py-1 border-mist-300 rounded-lg dark:border-mist-700"
                    id="taskName"
                    name="taskName"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="project"
                    className="text-mist-600 dark:text-mist-400"
                  >
                    Project
                  </label>

                  <select
                    name="project"
                    id="project"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="border p-[6px] border-mist-300 rounded-lg dark:border-mist-700 bg-mist-50 dark:bg-mist-900 "
                  >
                    {projectData.map((project) => (
                      <option value={project.project_name} key={project.id}>
                        {project.project_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="priority"
                    className="text-mist-600 dark:text-mist-400"
                  >
                    Task Proirity
                  </label>
                  <select
                    name="priority"
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="border p-[6px] border-mist-300 rounded-lg dark:border-mist-700 bg-mist-50 dark:bg-mist-900 "
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="date"
                    className="text-mist-600 dark:text-mist-400"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    placeholder="Enter name"
                    className="border px-2 py-1 border-mist-300 rounded-lg dark:border-mist-700 "
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="status"
                    className="text-mist-600 dark:text-mist-400"
                  >
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="border p-[6px] border-mist-300 rounded-lg dark:border-mist-700 bg-mist-50 dark:bg-mist-900 "
                  >
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Review">In Review</option>
                    <option value="Done">Done</option>
                  </select>
                </div>
              </div>

              <div className="w-full h-fit flex flex-col p-2 gap-1 pb-5 ">
                <label
                  htmlFor="description"
                  className="text-mist-600 dark:text-mist-400"
                >
                  {" "}
                  Descriptoin
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="border-2 h-30 border-mist-300 rounded-lg dark:border-mist-700 p-2"
                />
              </div>
            </div>

            <div className="flex justify-end pt-5 gap-4 ">
              <button
                type="button"
                onClick={() => closeTask(false)}
                className="dark:bg-mist-950 dark:text-white bg-mist-50 text-black py-1 px-3 rounded-lg border border-mist-300 dark:border-mist-700"
              >
                {" "}
                Cancel
              </button>
              <button
                type="submit"
                className="bg-mist-950 border text-white  dark:bg-mist-100 dark:text-black p-1 px-3 rounded-lg"
              >
                {" "}
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};
