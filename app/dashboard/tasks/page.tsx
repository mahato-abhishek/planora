"use server";
import TaskView from "@/app/ui/tasks/tasks-overview";
import { getProjectData, getTaskData } from "@/lib/actions/actions";

import { ProjectType, TaskType } from "@/lib/types/types";

export default async function Projects() {
  const taskData: TaskType[] = await getTaskData();
  const projectData: ProjectType[] = await getProjectData();
  return <TaskView taskData={taskData} projectData={projectData} />;
}
