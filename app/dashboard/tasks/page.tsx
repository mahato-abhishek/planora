"use server";
import TaskView from "@/app/ui/tasks/tasks-overview";
import { getProjectData, getTaskData } from "@/lib/actions/actions";

export default async function Projects() {
  const [taskData, projectData] = await Promise.all([
    getTaskData(),
    getProjectData(),
  ]);
  return <TaskView taskData={taskData} projectData={projectData} />;
}
