import { Dispatch } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { Task, completeTask } from "../redux/taskSlice";
import { CompleteSvg } from "../../public/assets/svgs";

interface CompleteTaskButtonProps {
  dispatch?: Dispatch;
  task?: Task;
  liRef?: React.RefObject<HTMLLIElement>;
  divRef?: React.RefObject<HTMLDivElement>;
}

const CompleteTaskButton = ({ dispatch, task }: CompleteTaskButtonProps) => {
  const [isCompleting, setIsCompleting] = useState<boolean>();

  useEffect(() => {
    setIsCompleting(task?.isComplete);
  }, [task?.isComplete]);

  const completeOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsCompleting(!isCompleting);
    setTimeout(() => {
      if (dispatch && task) {
        dispatch(completeTask({ id: task.id, isComplete: !task?.isComplete }));
      }
    }, 0);
  };

  return (
    <button
      className={`complete-task`}
      onClick={dispatch && task && completeOnClick}
    >
      {isCompleting === true && <CompleteSvg width={12} height={12} />}
    </button>
  );
};

export default CompleteTaskButton;
