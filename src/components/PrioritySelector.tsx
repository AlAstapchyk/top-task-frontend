import { useState, useEffect } from "react";
import { PriorityLevel, Task, editTask } from "../redux/taskSlice";
import { Dispatch } from "@reduxjs/toolkit";

interface PrioritySelectorProps {
  dispatch: Dispatch;
  task?: Task;
}

const PrioritySelector = ({ dispatch, task }: PrioritySelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [task]);

  const buttonSetPriorityOnClick = () => {
    setIsOpen(!isOpen);
  };

  const buttonPriorityOnClick = (priority: PriorityLevel) => {
    const newTask = { ...task, priority: priority } as Task;
    dispatch(editTask({ task: newTask }));
    setIsOpen(false);
  };

  return (
    <div className="priority-selector">
      <button className="set-priority-task" onClick={buttonSetPriorityOnClick}>
        <span className={"priority-level " + task?.priority}>
          {task?.priority}
        </span>
      </button>

      {isOpen && (
        <div className="priority-menu">
          <button onClick={() => buttonPriorityOnClick("A" as PriorityLevel)}>
            <span className={"priority-level A"}>A</span>
          </button>
          <button onClick={() => buttonPriorityOnClick("B" as PriorityLevel)}>
            <span className={"priority-level B"}>B</span>
          </button>
          <button onClick={() => buttonPriorityOnClick("C" as PriorityLevel)}>
            <span className={"priority-level C"}>C</span>
          </button>
          <button onClick={() => buttonPriorityOnClick("D" as PriorityLevel)}>
            <span className={"priority-level D"}>D</span>
          </button>
          <button onClick={() => buttonPriorityOnClick("E" as PriorityLevel)}>
            <span className={"priority-level E"}>E</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default PrioritySelector;
