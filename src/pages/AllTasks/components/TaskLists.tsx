import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import TaskItem from "./TaskItem";

const TaskLists = () => {
  const tasks = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  return (
    <div className="task-lists scroll-content">
      <div className="task-list a">
        <p className="task-list-title">Priority A</p>
        <ul>
          {tasks
            .filter((task) => task.priority === "A")
            .map((task) => (
              <TaskItem
                id={task.id}
                title={task.title}
                description=""
                isComplete={task.isComplete}
              />
            ))}
        </ul>
      </div>
      <div className="task-list b">
        <p className="task-list-title">Priority B</p>
        <ul>
          {tasks
            .filter((task) => task.priority === "B")
            .map((task) => (
              <TaskItem
                id={task.id}
                title={task.title}
                description=""
                isComplete={task.isComplete}
              />
            ))}
        </ul>
      </div>
      <div className="task-list c">
        <p className="task-list-title">Priority C</p>
        <ul>
          {tasks
            .filter((task) => task.priority === "C")
            .map((task) => (
              <TaskItem
                id={task.id}
                title={task.title}
                description=""
                isComplete={task.isComplete}
              />
            ))}
        </ul>
      </div>
      <div className="task-list d">
        <p className="task-list-title">Priority D</p>
        <ul>
          {tasks
            .filter((task) => task.priority === "D")
            .map((task) => (
              <TaskItem
                id={task.id}
                title={task.title}
                description=""
                isComplete={task.isComplete}
              />
            ))}
        </ul>
      </div>
      <div className="task-list e">
        <p className="task-list-title">Priority E</p>
        <ul>
          {tasks
            .filter((task) => task.priority === "E")
            .map((task) => (
              <TaskItem
                id={task.id}
                title={task.title}
                description=""
                isComplete={task.isComplete}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskLists;
