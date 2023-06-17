import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import TaskList from "./TaskList";


const TaskLists = () => {
  const tasks = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  return (
    <div className="task-lists scroll-content">
      <TaskList priority="A" tasks={tasks}/>
      <TaskList priority="B" tasks={tasks}/>
      <TaskList priority="C" tasks={tasks}/>
      <TaskList priority="D" tasks={tasks}/>
      <TaskList priority="E" tasks={tasks}/>
    </div>
  );
};

export default TaskLists;
