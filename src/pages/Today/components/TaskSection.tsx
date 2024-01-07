import { useAppSelector } from "../../../redux/hooks";
import NoTasks from "./NoTasks";
import TaskForm from "./TaskForm";
import TaskLists from "./TaskLists";
import { isToday } from "date-fns";

const TaskSection = () => {
  const uncompletedTodayTasks = useAppSelector((state) => state.tasks).filter(
    (task) => !task.isComplete && task?.due && isToday(task.due)
  );
  return (
    <section className="task-section">
      {uncompletedTodayTasks.length !== 0 ? (
        <div className="scroll-container">
          <TaskLists uncompletedTodayTasks={uncompletedTodayTasks} />
        </div>
      ) : (
        <NoTasks />
      )}

      <TaskForm />
    </section>
  );
};

export default TaskSection;
