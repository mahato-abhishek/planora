"use client";

import { NewProject } from "@/app/ui/projects/new-project";
import { useState, FC } from "react";
import { deleteProject } from "@/lib/actions/actions";
import { ProjectType } from "@/lib/types/types";

import { AllProjects } from "@/app/ui/projects/all-projects";
import { RiAddLine, RiFolderLine } from "react-icons/ri";

type ProjectProgress = Record<number, { total: number; completed: number }>;

const catagories = ["All Projects", "Low", "Medium", "High"];

interface Props {
  projectData: ProjectType[] | undefined;
  projectProgress: ProjectProgress;
}

const ProjectView: FC<Props> = ({ projectData, projectProgress }) => {
  const [projectOpen, setProjectOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectType>();
  const [active, setActive] = useState("All Projects");
  const [projects, setProjects] = useState<ProjectType[] | undefined>(
    projectData,
  );

  const deleteProjectItem = (id: number) => {
    setProjects((prev) => prev?.filter((todo) => todo.id !== id));
    deleteProject(id);
  };

  return (
    <div className="min-w-0 pb-8">
      <header className="border-b border-mist-300 px-4 py-5 dark:border-mist-800 sm:px-6 sm:py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
              Your projects
            </h1>
            <p className="mt-1 text-sm text-mist-600 dark:text-mist-400">
              Keep every goal, deadline, and piece of work organized.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setEditingProject(undefined);
              setProjectOpen(true);
            }}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-mist-950 px-4 py-2.5 text-sm text-white hover:bg-mist-800 dark:hover:bg-mist-200 dark:bg-mist-50 dark:text-black sm:w-fit cursor-pointer"
          >
            <RiAddLine size="18" /> New project
          </button>
        </div>
      </header>
      <div className="flex flex-col gap-3 border-b border-mist-300 px-4 py-3 dark:border-mist-800 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto pb-1">
          {catagories.map((category) => (
            <button
              type="button"
              key={category}
              className={`whitespace-nowrap rounded-md px-3 py-1.5 text-xs sm:text-sm cursor-pointer ${active === category ? "bg-mist-950 text-white dark:bg-mist-50 dark:text-black" : "text-mist-600 hover:bg-mist-200 dark:text-mist-400 dark:hover:bg-mist-800"}`}
              onClick={() => setActive(category)}
            >
              {category}
              {category === "All Projects" && (
                <span className="ml-1.5 text-[10px] opacity-70">
                  {projects?.length ?? 0}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
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
                editItem={() => {
                  setEditingProject(project);
                  setProjectOpen(true);
                }}
                progress={projectProgress[project.id]}
              />
            ))}
          {projects?.filter(
            (project) =>
              active === "All Projects" || project.priority === active,
          ).length === 0 && (
              <div className="col-span-full rounded-xl border border-dashed border-mist-300 px-4 py-16 text-center dark:border-mist-700">
                <RiFolderLine className="mx-auto text-mist-400" size="28" />
                <p className="mt-2 font-medium">No projects in this view</p>
                <p className="mt-1 text-sm text-mist-500">
                  Create a project or choose another priority.
                </p>
              </div>
            )}
        </div>
      </div>
      {projectOpen && (
        <NewProject
          closeTask={setProjectOpen}
          addProject={setProjects}
          projects={projects}
          project={editingProject}
        />
      )}
    </div>
  );
};
export default ProjectView;
