import React from "react";
import { Task, completeTask, deleteTask } from "../../../redux/taskSlice";
import { setRightPanelTask } from "../../../redux/RightPanelSlice"
import { useAppDispatch } from "../../../redux/hooks";

const TaskItem: React.FC<{ task: Task }> = ({
  task
}) => {
  const dispatch = useAppDispatch();

  const chooseTaskOnClick = () => {
    dispatch(setRightPanelTask({ task }));
  }

  const completeOnClick = () => {
    dispatch(completeTask({ id: task.id, isComplete: !(task.isComplete) }));
  };

  const deleteOnClick = () => {
    dispatch(deleteTask({ id: task.id }));
  };

  return (
    <li className="task-item card" onClick={chooseTaskOnClick}>
      <button className="complete-task" onClick={completeOnClick}></button>
      {task.title}
      <button className="delete" onClick={deleteOnClick}>Delete</button>
    </li>
  );
};

export default TaskItem;
