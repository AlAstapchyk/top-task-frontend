import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { Task } from "../redux/taskSlice";

const RightPanel = () => {
  const rightPanel = useAppSelector((state) => state.rightPanel);
  const tasks = useAppSelector((state) => state.tasks);
  const [task, setTask] = useState<Task>();
  
  const refRightPanel = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const checkOpenRightPanel = () => {
    if (rightPanel.type === null) {
      setIsOpen(false);
    } 
    else {
      setIsOpen(true);
      if (rightPanel.type === "showTask") {
        for (let i: number = 0; i < tasks.length; i++) {
          if (tasks[i].id === rightPanel.id) setTask(tasks[i]);
        }
      }
    }
  };

  useEffect(() => {
    console.log(1);
    checkOpenRightPanel();
  }, [refRightPanel, rightPanel]);

  if (isOpen) {
    return (
      <div className="right-panel" ref={refRightPanel}>
        <div className="task-details">
          <div className="topbar">
            <img className="close"></img>
            <div className="list"></div>
            <div className="date"></div>
          </div>

          <div className="scroll-container">
            <div className="scroll-content">
              <div className="task">
                <button className="complete-task"></button>
                <input placeholder="Add title" value={task?.title}></input>
                <img className="priority"></img>
              </div>
              <div className="subtasks">
                <div className="subtask">
                  <button className="complete-subtask"></button>
                  <input placeholder="Add subtask"></input>
                </div>
              </div>
              <div className="note">
                <input placeholder="Add note" value={task?.description}></input>
              </div>
            </div>
          </div>

          <div className="footer"></div>
        </div>
      </div>
    );
  } else return <></>;
};

export default RightPanel;
