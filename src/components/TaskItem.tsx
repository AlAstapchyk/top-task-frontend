import React from "react";
import { Task, deleteTask } from "../redux/taskSlice";
import { setRightPanelTask } from "../redux/RightPanelSlice";
import { useAppDispatch } from "../redux/hooks";
import CompleteTaskButton from "./CompleteTaskButton";
import { TrashSvg } from "../../public/assets/svgs";

const TaskItem: React.FC<{ task: Task; additionalClassName?: string }> = ({
  task,
  additionalClassName,
}) => {
  const dispatch = useAppDispatch();

  const chooseTaskOnClick = () => {
    dispatch(setRightPanelTask({ id: task.id }));
  };

  const deleteOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(deleteTask({ id: task.id }));
  };

  return (
    <div
      className={"task-item card " + additionalClassName}
      onClick={chooseTaskOnClick}
    >
      <CompleteTaskButton task={task} dispatch={dispatch} key={task.id} />
      <div className="title-wrapper">
        <span className="title">{task.title}</span>
      </div>
      <button className="delete-task" onClick={deleteOnClick}>
        <TrashSvg />
      </button>
    </div>
  );
};

export default TaskItem;
