import TaskItem from "../../../components/TaskItem";
import { Task } from "../../../redux/taskSlice";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useAppSelector } from "../../../redux/hooks";
import { RightPanelType } from "../../../redux/RightPanelSlice";
import { format, isSameYear, isBefore } from "date-fns";
import { useLayoutEffect, useState } from "react";

interface TaskListProps {
  dateNum: number;
  tasks: Task[] | [];
}
const TaskList: React.FC<TaskListProps> = ({
  dateNum,
  tasks,
}: TaskListProps) => {
  const rightPanel = useAppSelector((state) => state.rightPanel);
  const [thisDayTasks, setThisDayTasks] = useState<Task[]>();

  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + dateNum);

  const firstPText =
    dateNum < 0
      ? "Overdue"
      : dateNum === 0
      ? "Today | "
      : dateNum === 1
      ? "Tomorrow | "
      : "";

  useLayoutEffect(() => {
    const filteredTasks = tasks.filter(
      (task) =>
        task.due &&
        (dateNum < 0
          ? isDateYesterdayOrEarlier(task.due)
          : isDateEqualDateNum(task.due, dateNum))
    );
    setThisDayTasks(filteredTasks);
  }, [tasks]);

  return (
    <div className="task-list">
      <div className="list-header">
        <p className="task-list-title">
          {firstPText !== "" && (
            <span className={dateNum < 0 ? "overdue" : ""}>{firstPText}</span>
          )}
          {dateNum >= 0 &&
            format(
              dueDate,
              isSameYear(dueDate, new Date())
                ? "eee, MMM d"
                : "eee, MMM d, yyyy"
            )}
        </p>
      </div>

      {thisDayTasks && thisDayTasks?.length === 0 && (
        <p className="no-tasks">No tasks this day</p>
      )}

      <div className="scroll-container">
        <Droppable
          droppableId={dateNum.toString() ?? ""}
          type="category-id-all"
        >
          {(provided) => (
            <ul
              className="scroll-content"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {thisDayTasks &&
                thisDayTasks?.length !== 0 &&
                thisDayTasks.map((task, index) => (
                  <Draggable
                    key={task.id}
                    draggableId={task.id.toString()}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <li
                        className={
                          "draggable-task-item " +
                          task.priority +
                          " " +
                          (snapshot.isDragging ? "dragging" : "")
                        }
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getStyle(
                          provided.draggableProps.style,
                          snapshot
                        )}
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
    </div>
  );
};

export default TaskList;

function getStyle(style: any, snapshot: any) {
  if (!snapshot.isDragging) return {};
  if (!snapshot.isDropAnimating) {
    return style;
  }

  return {
    ...style,
    // cannot be 0, but make it super tiny
    transitionDuration: `0.001s`,
  };
}

function isDateYesterdayOrEarlier(date: Date): boolean {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  return isBefore(date, currentDate);
}
function isDateEqualDateNum(date: Date, dateNum: number): boolean {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + dateNum);

  return (
    date.getFullYear() === currentDate.getFullYear() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getDate() === currentDate.getDate()
  );
}
