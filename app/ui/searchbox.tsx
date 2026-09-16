"use client";

import { Modal } from "../components/modal/Modal";
import { useEffect, useRef, useState } from "react";
import useClickOutside from "../components/modal/useClickOutside";
import { geistSans, spaceMono } from "@/lib/fonts";
import { getProjectData, getTaskData } from "@/lib/actions/actions";
import { ProjectType, TaskType } from "@/lib/types/types";
import { useRouter } from "next/navigation";
import {
  RiArrowRightLine,
  RiFolderLine,
  RiSearchLine,
  RiTaskLine,
} from "react-icons/ri";

export const Searchbox = ({
  close,
}: {
  close: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const searchboxRef = useRef<HTMLDivElement>(null!);
  const inputRef = useRef<HTMLInputElement>(null);
  useClickOutside(searchboxRef, () => close(false));
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
    const fetchSearchData = async () => {
      try {
        const [projectData, taskData] = await Promise.all([
          getProjectData(),
          getTaskData(),
        ]);
        setProjects(projectData);
        setTasks(taskData);
      } finally {
        setLoading(false);
      }
    };
    fetchSearchData();
  }, []);

  const searchTerm = query.trim().toLowerCase();
  const filteredProjects = projects.filter((project) =>
    project.project_name.toLowerCase().includes(searchTerm),
  );
  const filteredTasks = tasks.filter((task) =>
    `${task.task_name} ${task.project_name} ${task.description ?? ""}`
      .toLowerCase()
      .includes(searchTerm),
  );

  const navigateTo = (path: string) => {
    close(false);
    router.push(path);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      close(false);
    }
    if (event.key === "Enter") {
      if (filteredProjects[0]) navigateTo("/dashboard/projects");
      else if (filteredTasks[0]) navigateTo("/dashboard/tasks");
    }
  };

  return (
    <Modal>
      <div
        ref={searchboxRef}
        className="flex h-[min(38rem,calc(100vh-2rem))] w-[calc(100%-1.5rem)] max-w-2xl flex-col overflow-hidden rounded-2xl border border-mist-300 bg-mist-50 shadow-xl dark:border-mist-700 dark:bg-mist-950 sm:w-[calc(100%-2rem)]"
      >
        <div className="border-b border-mist-300 p-4 dark:border-mist-700 sm:p-5">
          <div className="flex items-center gap-3 rounded-xl border border-mist-300 bg-white px-3 py-2.5 dark:border-mist-700 dark:bg-mist-900">
            <RiSearchLine className="shrink-0 text-mist-500" size="20" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search projects, tasks, or descriptions..."
              className="min-w-0 flex-1 bg-transparent text-sm outline-none"
            />
            <kbd className="hidden rounded border border-mist-300 px-1.5 py-0.5 text-[10px] text-mist-500 sm:block dark:border-mist-700">
              Enter
            </kbd>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-mist-500">
            <span>
              {loading ? "Loading your workspace..." : "Search your workspace"}
            </span>
            {!loading && (
              <span>
                {filteredProjects.length + filteredTasks.length} results
              </span>
            )}
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-5">
          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-14 animate-pulse rounded-xl bg-mist-200 dark:bg-mist-800"
                />
              ))}
            </div>
          ) : filteredProjects.length === 0 && filteredTasks.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center px-4 text-center">
              <RiSearchLine size="30" className="text-mist-400" />
              <p className="mt-3 font-medium">No matches found</p>
              <p className="mt-1 text-sm text-mist-500">
                Try a different project or task name.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <SearchGroup
                label="Projects"
                icon={<RiFolderLine size="17" />}
                items={filteredProjects.map((project) => ({
                  id: project.id,
                  title: project.project_name,
                  detail: `${project.project_type} · ${project.priority} priority`,
                  path: "/dashboard/projects",
                }))}
                navigateTo={navigateTo}
              />
              <SearchGroup
                label="Tasks"
                icon={<RiTaskLine size="17" />}
                items={filteredTasks.map((task) => ({
                  id: task.id,
                  title: task.task_name,
                  detail: `${task.project_name} · ${task.task_status}`,
                  path: "/dashboard/tasks",
                }))}
                navigateTo={navigateTo}
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-between border-t border-mist-300 px-4 py-3 text-xs text-mist-500 dark:border-mist-700 sm:px-5">
          <span className={`${spaceMono.className}`}>PLANORA SEARCH</span>
          <span>Esc to close</span>
        </div>
      </div>
    </Modal>
  );
};

const SearchGroup = ({
  label,
  icon,
  items,
  navigateTo,
}: {
  label: string;
  icon: React.ReactNode;
  items: { id: number; title: string; detail: string; path: string }[];
  navigateTo: (path: string) => void;
}) => {
  if (items.length === 0) return null;
  return (
    <section>
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-mist-500">
        {icon}
        {label}
        <span className="ml-auto">{items.length}</span>
      </div>
      <div className="space-y-1">
        {items.map((item) => (
          <button
            type="button"
            key={item.id}
            onClick={() => navigateTo(item.path)}
            className={`${geistSans.className} flex w-full items-center gap-3 rounded-xl border border-transparent px-3 py-3 text-left hover:border-mist-300 hover:bg-white dark:hover:border-mist-700 dark:hover:bg-mist-900`}
          >
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium">
                {item.title}
              </span>
              <span className="mt-1 block truncate text-xs text-mist-500">
                {item.detail}
              </span>
            </span>
            <RiArrowRightLine className="shrink-0 text-mist-400" size="17" />
          </button>
        ))}
      </div>
    </section>
  );
};
