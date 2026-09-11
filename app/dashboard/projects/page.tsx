"use server";
import ProjectView from "@/app/ui/projects/projects-overview";
import { getProjectData, getTaskData } from "@/lib/actions/actions";
import { ProjectType, TaskType } from "@/lib/types/types";

export default async function Projects() {
  const data: ProjectType[] = await getProjectData();
  const taskData: TaskType[] = await getTaskData();
  return <ProjectView projectData={data} taskData={taskData} />;
}
