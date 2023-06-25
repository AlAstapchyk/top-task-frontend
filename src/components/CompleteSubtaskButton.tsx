import { Dispatch } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { Subtask, completeSubtask } from "../redux/taskSlice";

interface CompleteSubtaskButtonProps {
  dispatch?: Dispatch;
  taskId: number;
  subtask: Subtask;
}

const CompleteSubtaskButton = ({
  dispatch,
  taskId,
  subtask,
}: CompleteSubtaskButtonProps) => {
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const completeOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (dispatch && subtask) {
      setIsComplete(!isComplete);
      dispatch(completeSubtask({ taskId: taskId, subtaskId: subtask.id, isComplete: !isComplete }));
    }
  };

  useEffect(() => {
    if (subtask) {
      setIsComplete(subtask.isComplete);
    }
  }, [subtask?.isComplete]);

  return (
    <button
      className={`complete-subtask ${isComplete ? "complete" : ""}`}
      onClick={dispatch && subtask && completeOnClick}
    ></button>
  );
};

export default CompleteSubtaskButton;
