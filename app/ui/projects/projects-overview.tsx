"use client";
import Header from "@/app/components/header";
import { RiTodoLine } from "react-icons/ri";
import { NewProject } from "@/app/ui/projects/new-project";
import { useState, FC } from "react";
import { deleteProject } from "@/lib/actions/actions";
import { ProjectType, TaskType } from "@/lib/types/types";

import { AllProjects } from "@/app/ui/projects/all-projects";

const catagories = ["All Projects", "Low", "Medium", "High"];

interface Props {
  projectData: ProjectType[];
  taskData: TaskType[];
}

const ProjectView: FC<Props> = ({ projectData, taskData }) => {
  const [projectOpen, setProjectOpen] = useState(false);
  const [active, setActive] = useState("All Projects");
  const [projects, setProjects] = useState<ProjectType[]>(projectData);

  const deleteProjectItem = (id: number) => {
    setProjects((prev) => prev.filter((todo) => todo.id !== id));
    deleteProject(id);
  };

  return (
    <div>
      <Header name="Projects" icon={<RiTodoLine />} />
      <div className="flex items-center justify-between p-4 ">
        <div className="flex items-center justify-center gap-2 bg-mist-100 border dark:border-mist-700 border-mist-300 dark:bg-mist-800 rounded-full p-1">
          {catagories.map((category) => (
            <button
              key={category}
              className={
                active == category
                  ? `text-sm  dark:bg-mist-950 bg-mist-300 border dark:border-mist-800 border-mist-400 rounded-full py-1 px-2`
                  : `text-sm pinter rounded-full py-1 px-2 cursor-pointer`
              }
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <button
          onClick={() => setProjectOpen(true)}
          className="dark:bg-mist-50 text-black py-2 px-4 text-sm rounded-lg bg-mist-950 text-white dark:text-black cursor-pointer"
        >
          + New Project
        </button>
      </div>
      <div className="p-4   ">
        <div className="grid grid-cols-3 gap-5">
          {projects
            ?.filter(
              (project) =>
                active === "All Projects" || project.priority === active,
            )
            .map((project) => (
              <AllProjects
                key={project.id}
                projectName={project.project_name}
                projectType={project.project_type}
                description={project.description}
                priority={project.priority}
                projectId={project.id}
                deleteItem={deleteProjectItem}
                taskData={taskData}
              />
            ))}
        </div>
      </div>

      {projectOpen && (
        <NewProject
          closeTask={setProjectOpen}
          addProject={setProjects}
          projects={projectData}
        />
      )}
    </div>
  );
};
export default ProjectView;
