import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: number;
  title: string;
  description: string;
  isComplete: boolean;
  priority: "A" | "B" | "C" | "D" | "E";
}

const initialState: Task[] = [
  {
    id: 1,
    title: "task1",
    description: "",
    isComplete: false,
    priority: "A",
  },
  {
    id: 2,
    title: "task2",
    description: "",
    isComplete: true,
    priority: "E",
  },
  {
    id: 3,
    title: "task3",
    description: "",
    isComplete: false,
    priority: "C",
  },
  {
    id: 4,
    title: "task3",
    description: "",
    isComplete: false,
    priority: "B",
  },
  {
    id: 5,
    title: "task3",
    description: "",
    isComplete: false,
    priority: "D",
  },
];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state: Task[], action: PayloadAction<{ title: string }>) => {
      const newTask: Task = {
        id: Date.now(),
        title: action.payload.title,
        description: "",
        isComplete: false,
        priority: "A",
      };
      state.push(newTask);
    },
    completeTask: (
      state: Task[],
      action: PayloadAction<{ id: number; isComplete: boolean }>
    ) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].isComplete = action.payload.isComplete;
    },
    deleteTask: (state: Task[], action: PayloadAction<{ id: number }>) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
    editTask: (
      state: Task[],
      action: PayloadAction<{ id: number; task: Task }>
    ) => {
      for (let i = 0; i < state.length; i++)
        if (state[i].id === action.payload.task.id)
          state[i] = action.payload.task;
    },
  },
});

export const { addTask, completeTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
