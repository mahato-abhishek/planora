"use client";
import { Modal } from "../components/modal/Modal";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import useClickOutside from "../components/modal/useClickOutside";
import { geistSans, spaceMono } from "@/lib/fonts";

import { getProjectData } from "@/lib/actions/actions";
import { getTaskData } from "@/lib/actions/actions";
import { useState } from "react";
import { ProjectType, TaskType } from "@/lib/types/types";

import { useRouter } from "next/navigation";

export const Searchbox = ({
  close,
}: {
  close: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const searchboxRef = useRef<HTMLDivElement>(null!);
  useClickOutside(searchboxRef, () => close(false));
  const [projects, setProjects] = useState<ProjectType[] | null>([]);
  const [tasks, setTasks] = useState<TaskType[] | null>([]);
  const [searchData, setSearchData] = useState<string[]>([]);

  const router = useRouter();
  useEffect(() => {
    const fetchProjects = async () => {
      const projectData = await getProjectData();
      const data = projectData.map((project) => project.project_name);
      setSearchData((prev) => [...new Set([...prev, ...data])]);
      setProjects(projectData);
    };
    const fetchTasks = async () => {
      const taskData = await getTaskData();
      const data = taskData.map((task) => task.task_name);
      setSearchData((prev) => [...new Set([...prev, ...data])]);

      setTasks(taskData);
    };

    fetchProjects();

    fetchTasks();
  }, []);
  console.log(searchData);

  const taskRoute = async () => {
    router.push("/dashboard/tasks");
  };
  const projectRoute = async () => {
    router.push("/dashboard/projects");
  };

  return (
    <Modal>
      <div
        className=" dark:bg-mist-900  bg-mist-100 dark:brightness-140 p-1 gap-2 h-100 flex justify-center flex-col  w-120  rounded-[20px]   border border-mist-400 dark:border-mist-600 "
        ref={searchboxRef}
      >
        <div className=" h-8 flex items-center justify-left px-5  gap-2 ">
          <FaMagnifyingGlass fill="gray" />
          <input
            type="text"
            className="w-full  focus:outline-none text-sm"
            placeholder="Search here..."
          />
        </div>
        <div className="h-full w-full bg-white outline-mist-300 dark:bg-mist-950 rounded-2xl dark:outline-mist-600 outline p-2 overflow-y-scroll scrollbar-none">
          <div className="p-2">
            <p className={`${spaceMono.className} font-bold py-1 text-sm`}>
              Projects
            </p>
            <ul className="space-y-1  rounded-xl  p-2 ">
              {projects?.map((project) => (
                <li
                  onClick={projectRoute}
                  key={project.id}
                  className={`${geistSans.className} text-sm px-[12px] py-[6px] hover:bg-mist-900 rounded cursor-pointer`}
                >
                  {project.project_name}
                </li>
              ))}
            </ul>
            <p className={`${spaceMono.className} font-bold py-1 text-sm`}>
              Tasks
            </p>
            <ul className="space-y-1  rounded-xl  p-2 ">
              {tasks?.map((task) => (
                <li
                  key={task.id}
                  onClick={taskRoute}
                  className={`${geistSans.className} text-sm px-[12px] py-[6px] hover:bg-mist-900 rounded cursor-pointer`}
                >
                  {task.task_name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="h-8"></div>
      </div>
    </Modal>
  );
};
