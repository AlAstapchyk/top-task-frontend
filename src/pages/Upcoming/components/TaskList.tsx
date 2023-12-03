import TaskItem from "../../../components/TaskItem";
import { Task } from "../../../redux/taskSlice";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useAppSelector } from "../../../redux/hooks";
import { RightPanelType } from "../../../redux/RightPanelSlice";
import { useState } from "react";
import { HamburgerSvg } from "../../../../public/assets/svgs";

interface TaskListProps {
  dateNum: number;
  tasks: Task[];
  initialIsOpen?: boolean;
}
const TaskList: React.FC<TaskListProps> = ({
  dateNum,
  tasks,
  initialIsOpen,
}: TaskListProps) => {
  const rightPanel = useAppSelector((state) => state.rightPanel);
  const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen !== false);

  return (
    <div className="task-list">
      <div className="list-header">
        <p className="task-list-title">{dateNum}</p>
        {tasks.length !== 0 && (
          <HamburgerSvg
            className="hamburger collapse-list"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>

      <Droppable droppableId={dateNum || ""}>
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {isOpen &&
              tasks
                // .filter((task) => task.priority === `${dateName}`)
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
