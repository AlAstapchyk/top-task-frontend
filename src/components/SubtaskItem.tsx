import { Dispatch } from "@reduxjs/toolkit";
import { Subtask, deleteSubtask } from "../redux/taskSlice";
import CompleteSubtaskButton from "./CompleteSubtaskButton";

interface SubtaskItemProps {
  taskId: number;
  subtask: Subtask;
  dispatch: Dispatch;
}

const SubtaskItem = ({taskId, subtask, dispatch}: SubtaskItemProps) => {
  const deleteOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(deleteSubtask({ taskId: taskId, subtaskId: subtask.id }));
  };

  return (
    <div className="subtask-item">
      <CompleteSubtaskButton taskId={taskId} subtask={subtask} dispatch={dispatch}/>
      <div className="title">{subtask.title}</div>
      <button className="delete" onClick={deleteOnClick}>Delete</button>
    </div>
  );
};

export default SubtaskItem;
