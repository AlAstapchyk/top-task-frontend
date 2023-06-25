import { Dispatch } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
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
  liRef,
  divRef,
}: CompleteTaskButtonProps) => {
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const completeOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (dispatch && task) {
      setIsComplete(!isComplete);
      dispatch(completeTask({ id: task.id, isComplete: !isComplete }));
    }
  };

  useEffect(() => {
    if (task) {
      setIsComplete(task.isComplete);
      setCompleteClass(task.isComplete);
    }
  }, [task?.isComplete]);

  const setCompleteClass = (isComplete: boolean): void => {
    if (isComplete) {
      if (liRef?.current?.className) liRef.current.className += " complete";
      else if (divRef?.current?.className)
        divRef.current.className += " complete";
    } else {
      if (liRef?.current?.className)
        liRef.current.className = liRef.current.className.replace(
          " complete",
          ""
        );
      else if (divRef?.current?.className)
        divRef.current.className = divRef.current.className.replace(
          " complete",
          ""
        );
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
