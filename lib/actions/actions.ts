"use server";
import { db } from "@/db/drizzle";
import { project, task } from "@/db/schema";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

import { eq } from "drizzle-orm";

import { headers } from "next/headers";

export const getUser = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return null;
  }
  return session.user;
};

export const createProject = async (
  project_name: string,
  project_type: string,
  priority: string,
  deadline: Date,
  description: string,
) => {
  const user = await getUser();
  if (!user) {
    throw new Error("Not authenticated");
  }
  await db.insert(project).values({
    userId: user.id,
    project_name: project_name,
    project_type: project_type,
    priority: priority,
    deadline: deadline,
    description: description,
  });
  revalidatePath("/dashboard/projects");
  return;
};
export const deleteProject = async (id: number) => {
  const user = await getUser();
  if (!user) {
    throw new Error("Not authenticated");
  }
  await db.delete(project).where(eq(project.id, id));

  revalidatePath("/dashboard/projects");
};

export const getProjectData = async () => {
  const user = await getUser();
  if (!user) {
    throw new Error("Not authenticated");
  }
  const projects = await db
    .select()
    .from(project)
    .where(eq(project.userId, user.id));
  return projects;
};
export const createTask = async (
  task_name: string,
  priority: string,
  deadline: Date,
  task_status: string,
  description: string,
  project_id: number,
  project_name: string,
) => {
  const user = await getUser();
  if (!user) {
    throw new Error("Not authenticated");
  }
  await db.insert(task).values({
    userId: user.id,
    project_id: project_id,
    task_name: task_name,
    priority: priority,
    deadline: deadline,
    task_status: task_status,
    description: description,
    project_name: project_name,
  });
  return;
};
export const deleteTask = async (id: number) => {
  const user = await getUser();
  if (!user) {
    throw new Error("Not authenticated");
  }
  await db.delete(task).where(eq(task.id, id));

  revalidatePath("/dashboard/tasks");
};

export const getTaskData = async () => {
  const user = await getUser();
  if (!user) {
    throw new Error("Not authenticated");
  }
  const tasks = await db.select().from(task).where(eq(task.userId, user.id));
  return tasks;
};
export const editTaskStatus = async (id: number, status: string) => {
  const user = await getUser();
  if (!user) {
    throw new Error("Not authenticated");
  }
  await db.update(task).set({ task_status: status }).where(eq(task.id, id));
  revalidatePath("/dashboard/tasks");
};
