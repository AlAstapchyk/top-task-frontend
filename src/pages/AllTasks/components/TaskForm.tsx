import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { PriorityLevel, addTask } from "../../../redux/taskSlice";
import PrioritySelector from "../../../components/PrioritySelector";

const plusSvg = (
  <svg className="plus" viewBox="0 0 16 16" stroke="#FFF" strokeWidth="2">
    <line x1="8" y1="1" x2="8" y2="15" strokeLinecap="round" />
    <line x1="1" y1="8" x2="15" y2="8" strokeLinecap="round" />
  </svg>
);

const TaskForm = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<string>("");
  const [priority, setPriority] = useState<PriorityLevel>("A");

  useEffect(() => {
    setPriority("A");
  }, []);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (value) {
      dispatch(
        addTask({
          title: value,
          taskProps: { priority: priority },
        })
      );
      setValue("");
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onPriorityChange = (newPriority: PriorityLevel) => {
    setPriority(newPriority);
  };

  return (
    <div className="add-task card">
      <form className={"task-form " + priority} onSubmit={onSubmit}>
        <button className="add-task" type="submit">
          {plusSvg}
        </button>
        <input
          type="text"
          placeholder="Add task"
          value={value}
          onChange={onChange}
        />
        <PrioritySelector
          priority={priority}
          priorityOnChange={onPriorityChange}
          direction="to-top"
        />
      </form>
    </div>
  );
};

export default TaskForm;
