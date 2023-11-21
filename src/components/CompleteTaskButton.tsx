import { Dispatch } from "@reduxjs/toolkit";
import React from "react";
import { Task, completeTask } from "../redux/taskSlice";

interface CompleteTaskButtonProps {
  dispatch?: Dispatch;
  task?: Task;
  liRef?: React.RefObject<HTMLLIElement>;
  divRef?: React.RefObject<HTMLDivElement>;
}

const CompleteTaskButton = ({
  dispatch,
  task,
}: CompleteTaskButtonProps) => {
  const completeOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (dispatch && task) {
      dispatch(completeTask({ id: task.id, isComplete: !task?.isComplete }));
    }
  };

  return (
    <button
      className={`complete-task`}
      onClick={dispatch && task && completeOnClick}
    ></button>
  );
};

export default CompleteTaskButton;
