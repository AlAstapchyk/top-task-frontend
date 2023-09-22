import React, { useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { addTask } from "../../../redux/taskSlice";

interface TaskFormProps {}

const TaskForm: React.FC<TaskFormProps> = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<string>("");

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (value) {
      dispatch(
        addTask({
          title: value,
        })
      );
      setValue("");
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="add-task card">
      <form className="task-form A" onSubmit={onSubmit}>
        <button type="submit">
          <svg
            className="plus"
            viewBox="0 0 16 16"
            stroke="#FFF"
            strokeWidth="2"
          >
            <line x1="8" y1="1" x2="8" y2="15" strokeLinecap="round" />
            <line x1="1" y1="8" x2="15" y2="8" strokeLinecap="round" />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Add task"
          value={value}
          onChange={onChange}
        />
        <button className="set-priority-task">
          <span></span>
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
