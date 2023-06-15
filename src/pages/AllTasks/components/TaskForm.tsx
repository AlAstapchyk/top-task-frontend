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
    <form className="task-form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add task"
        value={value}
        onChange={onChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
