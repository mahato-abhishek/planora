"use client";

import { Modal } from "@/app/components/modal/Modal";
import useClickOutside from "@/app/components/modal/useClickOutside";
import {
  createProject,
  getProjectData,
  updateProject,
} from "@/lib/actions/actions";
import { ProjectType } from "@/lib/types/types";
import { useRef, useState } from "react";
import { RiCalendarLine, RiCloseLine, RiFolderLine } from "react-icons/ri";

export const NewProject = ({
  closeTask,
  addProject,
  projects,
  project,
}: {
  closeTask: React.Dispatch<React.SetStateAction<boolean>>;
  addProject: React.Dispatch<React.SetStateAction<ProjectType[] | undefined>>;
  projects: ProjectType[] | undefined;
  project?: ProjectType;
}) => {
  const modalRef = useRef<HTMLDivElement>(null!);
  useClickOutside(modalRef, () => closeTask(false));
  const isEditing = Boolean(project);
  const [projectName, setProjectName] = useState(project?.project_name ?? "");
  const [projectType, setProjectType] = useState(project?.project_type ?? "");
  const [priority, setPriority] = useState(project?.priority ?? "Low");
  const [date, setDate] = useState(
    project ? project.deadline.toISOString().slice(0, 10) : "",
  );
  const [description, setDescription] = useState(project?.description ?? "");
  const [error, setError] = useState("");

  const submitData = async (formData: FormData) => {
    const name = formData.get("projectName") as string;
    const duplicate = projects?.some(
      (item) =>
        item.id !== project?.id &&
        item.project_name.toLowerCase() === name.trim().toLowerCase(),
    );
    if (duplicate) {
      setError("A project with this name already exists.");
      return;
    }

    try {
      const values = {
        name: name.trim(),
        type: formData.get("type") as string,
        priority: formData.get("priority") as string,
        deadline: new Date(formData.get("date") as string),
        description: formData.get("description") as string,
      };
      if (project) {
        await updateProject(
          project.id,
          values.name,
          values.type,
          values.priority,
          values.deadline,
          values.description,
        );
      } else {
        await createProject(
          values.name,
          values.type,
          values.priority,
          values.deadline,
          values.description,
        );
      }
      closeTask(false);
      addProject(await getProjectData());
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to save project.",
      );
    }
  };

  return (
    <Modal>
      <div
        ref={modalRef}
        className="flex max-h-[calc(100vh-1.5rem)] w-[calc(100%-1.5rem)] max-w-2xl flex-col overflow-hidden rounded-2xl border border-mist-300 bg-mist-50 shadow-2xl dark:border-mist-700 dark:bg-mist-950 sm:max-h-[calc(100vh-3rem)] sm:w-[calc(100%-3rem)]"
      >
        <header className="flex items-start justify-between border-b border-mist-300 px-5 py-4 dark:border-mist-700 sm:px-6">
          <div className="flex items-start gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-mist-200 dark:bg-mist-800">
              <RiFolderLine size="19" />
            </span>
            <div>
              <h2 className="font-semibold">
                {isEditing ? "Edit project" : "Create a project"}
              </h2>
              <p className="mt-1 text-xs text-mist-500">
                {isEditing
                  ? "Keep the project details accurate and useful."
                  : "Give your work a clear home and a finish line."}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => closeTask(false)}
            aria-label="Close project dialog"
            className="rounded-lg p-1.5 text-mist-500 hover:bg-mist-200 dark:hover:bg-mist-800"
          >
            <RiCloseLine size="20" />
          </button>
        </header>

        <form action={submitData} className="min-h-0 overflow-y-auto">
          <div className="space-y-5 p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Project name" htmlFor="projectName" required>
                <input
                  id="projectName"
                  name="projectName"
                  required
                  value={projectName}
                  onChange={(event) => setProjectName(event.target.value)}
                  placeholder="e.g. Website redesign"
                  className={inputClass}
                />
              </Field>
              <Field label="Project type" htmlFor="type" required>
                <input
                  id="type"
                  name="type"
                  required
                  value={projectType}
                  onChange={(event) => setProjectType(event.target.value)}
                  placeholder="e.g. Personal, client, school"
                  className={inputClass}
                />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Priority" htmlFor="priority">
                <select
                  id="priority"
                  name="priority"
                  value={priority}
                  onChange={(event) => setPriority(event.target.value)}
                  className={inputClass}
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </Field>
              <Field
                label="Deadline"
                htmlFor="date"
                icon={<RiCalendarLine size="14" />}
                required
              >
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  className={inputClass}
                />
              </Field>
            </div>

            <Field label="Description" htmlFor="description">
              <textarea
                id="description"
                name="description"
                required
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="What is this project about?"
                className={`${inputClass} min-h-32 resize-y`}
              />
            </Field>
            {error && (
              <p
                role="alert"
                className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-950 dark:bg-red-950/30 dark:text-red-300"
              >
                {error}
              </p>
            )}
          </div>

          <footer className="flex flex-col-reverse gap-2 border-t border-mist-300 bg-mist-100/70 px-5 py-4 dark:border-mist-700 dark:bg-mist-900/60 sm:flex-row sm:justify-end sm:px-6">
            <button
              type="button"
              onClick={() => closeTask(false)}
              className="rounded-lg border border-mist-300 px-4 py-2 text-sm hover:bg-mist-200 dark:border-mist-700 dark:hover:bg-mist-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-mist-950 px-4 py-2 text-sm text-white hover:bg-mist-800 dark:bg-mist-50 dark:text-black dark:hover:bg-mist-200"
            >
              {isEditing ? "Save changes" : "Create project"}
            </button>
          </footer>
        </form>
      </div>
    </Modal>
  );
};

const inputClass =
  "w-full rounded-lg border border-mist-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-mist-950 focus:ring-2 focus:ring-mist-200 dark:border-mist-700 dark:bg-mist-900 dark:focus:border-mist-200 dark:focus:ring-mist-800";

const Field = ({
  label,
  htmlFor,
  required,
  icon,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="space-y-1.5">
    <label
      htmlFor={htmlFor}
      className="flex items-center gap-1 text-xs font-semibold text-mist-700 dark:text-mist-300"
    >
      {icon}
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    {children}
  </div>
);
