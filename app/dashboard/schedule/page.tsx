import CalendarView from "@/app/ui/schedule/schedule-overview";
import { getProjectData, getTaskData } from "@/lib/actions/actions";

const Schedule = async () => {
  const [tasks, projects] = await Promise.all([
    getTaskData(),
    getProjectData(),
  ]);

  return <CalendarView taskData={tasks} projectData={projects} />;
};

export default Schedule;
