import { useState, useEffect, useRef } from "react";
import { PriorityLevel } from "../redux/taskSlice";
type Direction = "to-top" | "to-bottom";
interface PrioritySelectorProps {
  priority?: PriorityLevel;
  priorityOnChange: (priority: PriorityLevel) => void;
  direction?: Direction;
}
const PrioritySelector = ({
  priority,
  priorityOnChange,
  direction = "to-bottom",
}: PrioritySelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const animateMenu = async () => {
    setTimeout(() => {
      if (isOpen) menuRef.current?.classList.add("open");
      else menuRef.current?.classList.remove("open");
    }, 0);
  };

  useEffect(() => {
    animateMenu();
  }, [isOpen]);

  const onClickPriorityLevel = (priority: PriorityLevel) => {
    priorityOnChange(priority);
    setIsOpen(false);
  };

  const PriorityMenu = (): JSX.Element => {
    if (isOpen)
      return (
        <div
          className={"priority-menu " + (direction ? direction : "to-bottom")}
          ref={menuRef}
        >
          <button onClick={() => onClickPriorityLevel("A")}>
            <span className={"priority-level A"}>A</span>
          </button>
          <button onClick={() => onClickPriorityLevel("B")}>
            <span className={"priority-level B"}>B</span>
          </button>
          <button onClick={() => onClickPriorityLevel("C")}>
            <span className={"priority-level C"}>C</span>
          </button>
          <button onClick={() => onClickPriorityLevel("D")}>
            <span className={"priority-level D"}>D</span>
          </button>
          <button onClick={() => onClickPriorityLevel("E")}>
            <span className={"priority-level E"}>E</span>
          </button>
        </div>
      );
      else return(<></>)
  };

  return (
    <div className="priority-selector">
      {direction === "to-top" && <PriorityMenu />}
      <button
        type="button"
        className="set-priority-task"
        onClick={() => setIsOpen(!isOpen)}
      >
        {priority && (
          <span className={"priority-level " + priority}>{priority}</span>
        )}
      </button>
      {direction === "to-bottom" && <PriorityMenu />}
    </div>
  );
};

export default PrioritySelector;
