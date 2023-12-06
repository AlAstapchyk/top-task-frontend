import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { PriorityLevel, addTask } from "../../../redux/taskSlice";
import PrioritySelector from "../../../components/PrioritySelector";
import { PlusSvg } from "../../../../public/assets/svgs";

interface TaskFormProps {
  dateNum?: number;
}
const TaskForm = ({ dateNum }: TaskFormProps) => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<string>("");
  const [priority, setPriority] = useState<PriorityLevel>("A");

  useEffect(() => {
    setPriority("A");
  }, []);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (value) {
      const due = new Date();
      if (dateNum) due.setDate(due.getDate() + dateNum);
      dispatch(
        addTask({
          title: value,
          taskProps: { priority: priority, due: due },
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
    <form className={"task-form " + priority} onSubmit={onSubmit}>
      <button className="add-task" type="submit">
        <PlusSvg />
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
  );
};

export default TaskForm;
