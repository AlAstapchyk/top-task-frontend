import { useAppSelector } from "../../../redux/hooks";
import { Task } from "../../../redux/taskSlice";
import NoTasks from "./NoTasks";
import TaskLists from "./TaskLists";

const TaskSection = () => {
  const leftBar = useAppSelector((state) => state.leftBar);
  const searchingTasks: Task[] = useAppSelector((state) => state.tasks).filter(
    (task) =>
      task.title.toLowerCase().includes(leftBar.searchValue.toLowerCase())
  );

  return (
    <section className="task-section">
      {searchingTasks.length !== 0 ? (
        <div className="scroll-container">
          <TaskLists searchingTasks={searchingTasks} />
        </div>
      ) : (
        <NoTasks />
      )}
    </section>
  );
};

export default TaskSection;
