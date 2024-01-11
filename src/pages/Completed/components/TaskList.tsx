import TaskItem from "../../../components/TaskItem";
import { Task } from "../../../redux/taskSlice";
import { useAppSelector } from "../../../redux/hooks";
import { RightPanelType } from "../../../redux/RightPanelSlice";

interface TaskListProps {
  priority?: string;
  tasks: Task[];
}
const TaskList: React.FC<TaskListProps> = ({
  priority,
  tasks,
}: TaskListProps) => {
  const rightPanel = useAppSelector((state) => state.rightPanel);

  return (
    <div className={`task-list ${priority}`}>
      <p className="task-list-title">Priority {priority}</p>
      <ul>
        {tasks
          .sort((a, b) => a.priorityPosition - b.priorityPosition)
          .map((task) => (
            <li className="draggable-task-item" key={task.id}>
              <TaskItem
                task={task}
                additionalClassName={
                  String(
                    task.id === rightPanel.id &&
                      rightPanel.type === RightPanelType.showTask
                      ? "active "
                      : ""
                  ) + (task.isComplete ? "complete" : "")
                }
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TaskList;
