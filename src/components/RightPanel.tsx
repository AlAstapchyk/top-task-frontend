import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  PriorityLevel,
  Task,
  editTask,
  setDueTask,
  setPriorityPositionTask,
} from "../redux/taskSlice";
import { RightPanelType, setRightPanelType } from "../redux/RightPanelSlice";
import Resizer from "./Resizer";
import CompleteTaskButton from "./CompleteTaskButton";
import SubtaskForm from "./SubtaskForm";
import SubtaskList from "./SubtaskList";
import InputFieldPlain from "./InputFieldPlain";
import InputFieldDecorated from "./InputFieldDecorated";
import PrioritySelector from "./PrioritySelector";
import { ThreeDotsSvg } from "../../public/assets/svgs";
import SetDueButton from "./SetDueButton";

const RightPanel = () => {
  const dispatch = useAppDispatch();

  const rightPanel = useAppSelector((state) => state.rightPanel);
  const tasks = useAppSelector((state) => state.tasks);
  const [task, setTask] = useState<Task>();

  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [dateStr, setDateStr] = useState<string | undefined>(""); // completed or created at

  const rightPanelRef = useRef<HTMLDivElement>(null);
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
    if (newValue !== "") {
      setTitle(newValue);
      const newTask = { ...task, title: newValue } as Task;
      dispatch(editTask({ task: newTask }));
    }
  };
  const priorityOnChange = (priority: PriorityLevel) => {
    if (task)
      dispatch(
        setPriorityPositionTask({
          id: task.id,
          newPosition: 1,
          newPriority: priority,
        })
      );
  };
  const descriptionOnChange = (newValue: string) => {
    setDescription(newValue);
    const newTask = { ...task, description: newValue } as Task;
    console.log(newTask);
    dispatch(editTask({ task: newTask }));
  };
  const dueButtonOnClick = (date: Date | null) => {
    if (task?.id) dispatch(setDueTask({ id: task.id, newDate: date }));
  };

  useEffect(() => {
    setTitle(task?.title);
  }, [task?.title]);
  useEffect(() => {
    setDescription(task?.description);
  }, [task?.description]);
  useEffect(() => {
    if (task?.isComplete && task?.completedAt)
      setDateStr(formattedDate(task.completedAt));
    else if (task?.createdAt) setDateStr(formattedDate(task.createdAt));
  }, [task?.createdAt, task?.completedAt]);

  if (isOpen) {
    return (
      <div className="right-panel" ref={rightPanelRef}>
        <Resizer elementRef={rightPanelRef} isOnStart={true} />
        <div
          className={`task-details ${task?.priority} ${
            task?.isComplete ? "complete" : ""
          }`}
        >
          <div className="topbar">
            <svg
              className="right-arrow"
              viewBox="0 0 100 100"
              strokeWidth="10"
              strokeLinecap="round"
              onClick={closeRightPanel}
            >
              <line x1="30" y1="10" x2="70" y2="50" className="line-1" />
              <line x1="70" y1="50" x2="30" y2="90" className="line-2" />
            </svg>

            <SetDueButton
              onChange={dueButtonOnClick}
              initialDate={task?.due ?? null}
              key={task?.id + " " + task?.due}
            />

            <ThreeDotsSvg height={20} width={20} />
          </div>

          <div className="scroll-container">
            <div className="scroll-content">
              <div className="task">
                {task && <CompleteTaskButton dispatch={dispatch} task={task} />}
                <InputFieldPlain
                  isOneParagraph={true}
                  placeholder="Add title"
                  value={title}
                  onChange={titleOnChange}
                />
                <PrioritySelector
                  priority={task?.priority}
                  priorityOnChange={priorityOnChange}
                  direction="to-bottom"
                />
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
                <InputFieldDecorated
                  value={description}
                  isOneParagraph={false}
                  placeholder="Add note"
                  onChange={descriptionOnChange}
                />
              </div>
            </div>
          </div>

          <div className="footer">
            <p className="date">
              {task?.isComplete ? "Completed " : "Created "} {dateStr}
            </p>
          </div>
        </div>
      </div>
    );
  } else return <></>;

  function formattedDate(date: Date) {
    const currentYear = new Date().getFullYear();
    return (
      `${date.getDate()} ${date.toLocaleString("en", {
        month: "short",
      })} ` +
      (currentYear !== date.getFullYear()
        ? date.getFullYear().toString()
        : `· ${date?.getHours().toString().padStart(2, "0")}:${date
            ?.getMinutes()
            .toString()
            .padStart(2, "0")}`)
    );
  }
};

export default RightPanel;
