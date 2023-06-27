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
      <button className="delete" onClick={deleteOnClick}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
