"use client";
import { Modal } from "@/app/components/modal/Modal";
import useClickOutside from "@/app/components/modal/useClickOutside";
import { createProject, getProjectData } from "@/lib/actions/actions";
import { ProjectType } from "@/lib/types/types";
import { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";

export const NewProject = ({
  closeTask,
  addProject,
  projects,
}: {
  closeTask: React.Dispatch<React.SetStateAction<boolean>>;
  addProject: React.Dispatch<React.SetStateAction<ProjectType[] | undefined>>;
  projects: ProjectType[] | undefined;
}) => {
  const searchboxRef = useRef<HTMLDivElement>(null!);
  useClickOutside(searchboxRef, () => closeTask(false));
  const [task, setTask] = useState("");
  const [project, setProject] = useState("");
  const [priority, setPriority] = useState("Low");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const submitData = async (formData: FormData) => {
    const data = {
      projectName: formData.get("projectName"),
      type: formData.get("type"),
      priority: formData.get("priority"),
      description: formData.get("description"),
      date: formData.get("date"),
    };
    const projectNames = projects?.map((project) => project.project_name);
    if (projectNames) {
      for (let name of projectNames) {
        if (name == data.projectName) {
          setError("Project name already exists. Try another name");
          return;
        }
      }
      return;
    }

    try {
      await createProject(
        data.projectName as string,
        data.type as string,
        data.priority as string,
        new Date(data.date as string),
        data.description as string,
      );
      closeTask(false);
      const projectData = await getProjectData();
      addProject(projectData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal>
      <div
        className=" dark:bg-mist-950 dark:brightness-140   gap-2 h-fit flex justify-left flex-col  w-160  rounded-[20px] outline outline-mist-400 dark:outline-mist-800 p-1 bg-mist-300"
        ref={searchboxRef}
      >
        <div className="h-full w-full border dark:border-mist-800 border-mist-300 rounded-2xl p-3 bg-mist-100 dark:bg-mist-900">
          <div className="flex items-cetner justify-between p-3">
            <p className="font-semibold ">Create New Project</p>
            <button
              onClick={() => closeTask(false)}
              className="border dark:border-gray-700 border-mist-400  p-1 rounded-full"
            >
              <RxCross2 size="16" />
            </button>
          </div>
          <form action={submitData}>
            <div className="border p-2 border-mist-300 rounded-lg dark:border-mist-700">
              <div className="grid grid-cols-2 gap-8 py-4 px-2 ">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="projectName"
                    className="text-mist-600 dark:text-mist-400"
                  >
                    Project Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="border px-2 py-1 border-mist-300 rounded-lg dark:border-mist-700"
                    id="projectName"
                    name="projectName"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="type"
                    className="text-mist-600 dark:text-mist-400"
                  >
                    Project Type
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="border px-2 py-1 border-mist-300 rounded-lg dark:border-mist-700"
                    id="type"
                    name="type"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="priority"
                    className="text-mist-600 dark:text-mist-400"
                  >
                    Priority
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
                    htmlFor="type"
                    className="text-mist-600 dark:text-mist-400"
                  >
                    Deadline
                  </label>
                  <input
                    type="date"
                    placeholder="Enter name"
                    className="border px-2 py-1 border-mist-300 rounded-lg dark:border-mist-700"
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
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
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="border-2 h-30 border-mist-300 rounded-lg dark:border-mist-700 p-2"
                />
              </div>
            </div>

            <div className="flex align-center justify-between pt-5 gap-4 ">
              <p className="text-red-500 px-2">{error}</p>
              <div className="flex gap-4 align-center justify-center">
                <button
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
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};
