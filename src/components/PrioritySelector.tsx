import { useState, useEffect } from "react";
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

  useEffect(() => {
    setIsOpen(false);
  }, []);

  const onClickPriorityLevel = (priority: PriorityLevel) => {
    priorityOnChange(priority);
    setIsOpen(false);
  };

  const PriorityMenu = () => {
    if (isOpen)
      return (
        <div
          className={"priority-menu " + (direction ? direction : "to-bottom")}
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
