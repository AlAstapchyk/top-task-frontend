import { useAppSelector } from "../../../redux/hooks";
import NoTasks from "./NoTasks";
import TaskForm from "./TaskForm";
import TaskLists from "./TaskLists";

const TaskSection = () => {
  const uncompletedTasks = useAppSelector((state) => state.tasks).filter(
    (task) => !task.isComplete
  );
  return (
    <section className="task-section">
      {uncompletedTasks.length !== 0 ? (
        <div className="scroll-container">
          <TaskLists uncompletedTasks={uncompletedTasks} />
        </div>
      ) : (
        <NoTasks />
      )}

      <TaskForm />
    </section>
  );
};

export default TaskSection;
