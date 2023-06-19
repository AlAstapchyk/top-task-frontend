import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Task, editTask } from "../redux/taskSlice";
import { RightPanelType, setRightPanelType } from "../redux/RightPanelSlice";

const RightPanel = () => {
  const dispatch = useAppDispatch();

  const rightPanel = useAppSelector((state) => state.rightPanel);
  const [task, setTask] = useState<Task>();

  const refRightPanel = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>();

  const closeRightPanel = () => {
    dispatch(setRightPanelType({type: RightPanelType.close}));
  };

  const checkOpenRightPanel = (): boolean => {
    if (rightPanel.type === 0) {
      setIsOpen(false);
      return false;
    } else {
      setIsOpen(true);
      return true;
    }
  };

  useEffect(() => {
    if (checkOpenRightPanel()) {
      setTask(rightPanel.task);
    }
  }, [rightPanel]);

  useEffect(() => {
    if (task) dispatch(editTask({ id: task.id, task }));
    setTitle(task?.title);
  }, [dispatch, task]);

  if (isOpen) {
    return (
      <div className="right-panel" ref={refRightPanel}>
        <div className="task-details">
          <div className="topbar">
            <img className="close" onClick={closeRightPanel}></img>
            <div className="list"></div>
            <div className="date"></div>
          </div>

          <div className="scroll-container">
            <div className="scroll-content">
              <div className="task">
                <button className="complete-task"></button>
                <input
                  placeholder="Add title"
                  value={title}
                  onChange={(e) => {
                    if (task) setTask({ ...task, title: e.target.value });
                  }}
                ></input>
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
