import { Dispatch } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { addSubtask } from "../redux/taskSlice";

interface SubtaskFormProps {
  taskId: number;
  dispatch: Dispatch;
}

const SubtaskForm = ({ taskId, dispatch }: SubtaskFormProps) => {
  const [value, setValue] = useState<string>("");

  const addSubtaskOnClick = (event: React.FormEvent) => {
    event.preventDefault();
    if (value !== "") {
      dispatch(addSubtask({ taskId: taskId, title: value }));
      setValue("");
    }
  };

  return (
    <form className="subtask-form" onSubmit={addSubtaskOnClick}>
      <button className="add-subtask" type="submit">
        <svg className="plus" viewBox="0 0 16 16" stroke="#FFF" strokeWidth="2">
          <line x1="8" y1="1" x2="8" y2="15" strokeLinecap="round" />
          <line x1="1" y1="8" x2="15" y2="8" strokeLinecap="round" />
        </svg>
      </button>
      <input
        placeholder="Add subtask"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </form>
  );
};

export default SubtaskForm;
