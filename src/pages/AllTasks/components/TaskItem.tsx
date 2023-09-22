import React, { useRef } from "react";
import { Task, deleteTask } from "../../../redux/taskSlice";
import { setRightPanelTask } from "../../../redux/RightPanelSlice";
import { useAppDispatch } from "../../../redux/hooks";
import CompleteTaskButton from "../../../components/CompleteTaskButton";

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const dispatch = useAppDispatch();
  const taskItemRef = useRef<HTMLLIElement>(null);

  const chooseTaskOnClick = () => {
    dispatch(setRightPanelTask({ id: task.id }));
  };

  const deleteOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(deleteTask({ id: task.id }));
  };

  return (
    <li
      className="task-item card"
      onClick={chooseTaskOnClick}
      ref={taskItemRef}
    >
      <CompleteTaskButton task={task} dispatch={dispatch} liRef={taskItemRef} />
      <div className="title-wrapper">
        <span className="title">{task.title}</span>
      </div>
      <button className="delete-task" onClick={deleteOnClick}>
        <svg
          className="trash"
          viewBox="0 0 13 16.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 8.437 2.5 L 8.436 2.5 L 4.563 2.5 C 4.521 2.336 4.5 2.169 4.5 2 C 4.5 0.897 5.397 0 6.5 0 C 7.603 0 8.5 0.897 8.5 2 C 8.5 2.169 8.479 2.337 8.437 2.499 L 8.437 2.5 Z" />
          <path d="M 1 3.5 C 0.448 3.5 0 3.052 0 2.5 C 0 1.948 0.448 1.5 1 1.5 L 12 1.5 C 12.552 1.5 13 1.948 13 2.5 C 13 3.052 12.552 3.5 12 3.5 L 1 3.5 Z" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M 11 16.5 C 11.552 16.5 12 16.052 12 15.5 L 12 5 C 12 4.448 11.552 4 11 4 L 2 4 C 1.448 4 1 4.448 1 5 L 1 15.5 C 1 16.052 1.448 16.5 2 16.5 L 11 16.5 Z M 9 6.5 C 9 6.224 9.224 6 9.5 6 C 9.776 6 10 6.224 10 6.5 L 10 13.5 C 10 13.776 9.776 14 9.5 14 C 9.224 14 9 13.776 9 13.5 L 9 6.5 Z M 6.5 6 C 6.224 6 6 6.224 6 6.5 L 6 13.5 C 6 13.776 6.224 14 6.5 14 C 6.776 14 7 13.776 7 13.5 L 7 6.5 C 7 6.224 6.776 6 6.5 6 Z M 3 6.5 C 3 6.224 3.224 6 3.5 6 C 3.776 6 4 6.224 4 6.5 L 4 13.5 C 4 13.776 3.776 14 3.5 14 C 3.224 14 3 13.776 3 13.5 L 3 6.5 Z"
          />
        </svg>
      </button>
    </li>
  );
};

export default TaskItem;
