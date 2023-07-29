import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Task, editTask } from "../redux/taskSlice";
import { RightPanelType, setRightPanelType } from "../redux/RightPanelSlice";
import Resizer from "./Resizer";
import CompleteTaskButton from "./CompleteTaskButton";
import SubtaskForm from "./SubtaskForm";
import SubtaskList from "./SubtaskList";
import InputFieldPlain from "./InputFieldPlain";
import InputFieldDecorated from "./InputFieldDecorated";

const RightPanel = () => {
  const dispatch = useAppDispatch();

  const rightPanel = useAppSelector((state) => state.rightPanel);
  const tasks = useAppSelector((state) => state.tasks);
  const [task, setTask] = useState<Task>();

  const [title, setTitle] = useState<string>();

  const refRightPanel = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeRightPanel = () => {
    dispatch(setRightPanelType({ type: RightPanelType.close }));
  };

  useEffect(() => {
    if (rightPanel.type === 0) {
      setIsOpen(false);
    } else {
      const foundTask = tasks.find((task) => task.id === rightPanel.id);

      if (foundTask) {
        setTask(tasks.find((task) => task.id === rightPanel.id));
        setIsOpen(true);
      } else setIsOpen(false); // change this on rightPanel.type = 1;
    }
  }, [rightPanel, tasks]);

  const titleOnChange = (newValue: string) => {
    setTitle(newValue);
    if (task?.title) {  
      const newTask = {...task, title: newValue} as Task;
      dispatch(editTask({task: newTask}));
    } 
  };

  useEffect(()=>{
    setTitle(task?.title);
  }, [task?.title]);

  if (isOpen) {
    return (
      <div className="right-panel" ref={refRightPanel}>
        <Resizer elementRef={refRightPanel} isOnStart={true} />
        <div
          className={`task-details ${task?.priority} ${
            task?.isComplete ? "complete" : ""
          }`}
        >
          <div className="topbar">
            <img className="close" onClick={closeRightPanel} alt="close"></img>
            <div className="list"></div>
            <div className="date"></div>
          </div>

          <div className="scroll-container">
            <div className="scroll-content">
              <div className="task">
                {task && <CompleteTaskButton dispatch={dispatch} task={task} />}
                <InputFieldPlain isOneParagraph={true} isDecorated={false} placeholder="Add title" value={ title } onChange={titleOnChange}/>
                <button className="set-priority-task">
                  <span></span>
                </button>
              </div>

              <div className="subtasks">
                {task?.id && (
                  <SubtaskList
                    taskId={task?.id}
                    subtasks={task.subtasks}
                    dispatch={dispatch}
                  />
                )}
                {task?.id && (
                  <SubtaskForm taskId={task?.id} dispatch={dispatch} />
                )}
              </div>

              <div className="note">
                <InputFieldDecorated isOneParagraph={false} placeholder="Add note"/>
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
