import CalendarView from "@/app/ui/schedule/schedule-overview";
import { getProjectData, getTaskData } from "@/lib/actions/actions";

const Schedule = async () => {
  const tasks = await getTaskData();
  const projects = await getProjectData();

  return <CalendarView taskData={tasks} projectData={projects} />;
};

export default Schedule;
