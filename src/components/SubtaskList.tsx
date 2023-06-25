import { Dispatch } from "@reduxjs/toolkit";
import { Subtask } from "../redux/taskSlice";
import SubtaskItem from "./SubtaskItem";

interface SubtaskListProps {
  taskId: number;
  subtasks: Subtask[];
  dispatch: Dispatch;
}

const SubtaskList = ({ taskId, subtasks, dispatch }: SubtaskListProps) => {

  return (
    <div className="subtask-list">
      <ol>
        {subtasks.map((subtask) => (
          <SubtaskItem key={subtask.id} taskId={taskId} subtask={subtask} dispatch={dispatch}/>
        ))}
      </ol>
    </div>
  );
};

export default SubtaskList;
