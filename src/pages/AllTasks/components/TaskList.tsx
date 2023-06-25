import TaskItem from "./TaskItem";
import { Task } from "../../../redux/taskSlice";
import { Draggable, Droppable, DraggableProps } from "react-beautiful-dnd";

interface TaskListProps {
  priority?: string;
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ priority, tasks }: TaskListProps) => {
  return (
    <div className={`task-list ${priority}`}>
      <p className="task-list-title">Priority {priority}</p>
      <Droppable droppableId={priority || ""}>
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {tasks
              .filter((task) => task.priority === `${priority}`)
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
                      <TaskItem task={task} />
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
