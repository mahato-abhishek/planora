export type ProjectType = {
  userId: string;
  id: number;
  project_name: string;
  project_type: string;
  priority: string;
  deadline: Date;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};
export type TaskType = {
  userId: string;
  id: number;
  task_name: string;
  project_id: number;
  priority: string;
  deadline: Date;
  task_status: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
  project_name: string;
};
