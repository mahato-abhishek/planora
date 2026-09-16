"use server";
import ProjectView from "@/app/ui/projects/projects-overview";
import { getProjectData, getProjectProgress } from "@/lib/actions/actions";

export default async function Projects() {
  const [projectData, projectProgress] = await Promise.all([
    getProjectData(),
    getProjectProgress(),
  ]);

  return (
    <ProjectView projectData={projectData} projectProgress={projectProgress} />
  );
}
