import TaskItem from "../../../components/TaskItem";
import { Task } from "../../../redux/taskSlice";
import { Draggable, Droppable } from "react-beautiful-dnd";
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
      <Droppable droppableId={priority || ""}>
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {tasks
              .filter((task) => task.priority === `${priority}`)
              .sort((a, b) => a.priorityPosition - b.priorityPosition)
              .map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <li
                      className="draggable-task-item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TaskItem
                        task={task}
                        additionalClassName={String(task.id === rightPanel.id && rightPanel.type === RightPanelType.showTask ? "active " : "") + (task.isComplete ? "complete" : "")}
                      />
                    </li>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};

export default TaskList;
