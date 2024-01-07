import { useAppSelector } from "../../../redux/hooks";
import { Task } from "../../../redux/taskSlice";
import NoTasks from "./NoTasks";
import TaskLists from "./TaskLists";

const TaskSection = () => {
  const completedTasks = useAppSelector((state) => state.tasks).filter(
    (task) => task.isComplete
  );
  return (
    <section className="task-section">
      {completedTasks.length !== 0 ? (
        <div className="scroll-container">
          <TaskLists completedTasks={completedTasks}/>
        </div>
      ) : (
        <NoTasks />
      )}
    </section>
  );
};

export default TaskSection;
