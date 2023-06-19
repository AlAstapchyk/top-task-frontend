import React, { FormEvent } from "react";
import { Task, completeTask, deleteTask } from "../../../redux/taskSlice";
import { chooseTask } from "../../../redux/RightPanelSlice"
import { useAppDispatch } from "../../../redux/hooks";

interface TaskItemProps {
  id: number;
  title: string;
  description: string;
  isComplete: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({
  id,
  title,
  description,
  isComplete,
}) => {
  const dispatch = useAppDispatch();

  const chooseTaskOnClick = () => {
    dispatch(chooseTask({ id }));
  }

  const completeOnClick = () => {
    dispatch(completeTask({ id, isComplete: !isComplete }));
  };

  const deleteOnClick = () => {
    dispatch(deleteTask({ id }));
  };

  return (
    <li className="task-item card" onClick={chooseTaskOnClick}>
      <button className="complete-task" onClick={completeOnClick}></button>
      {title}
      <button className="delete" onClick={deleteOnClick}>Delete</button>
    </li>
  );
};

export default TaskItem;
