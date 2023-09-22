import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Subtask {
  id: number;
  title: string;
  isComplete: boolean;
}

export type PriorityLevel = "A" | "B" | "C" | "D" | "E";

export interface Task {
  id: number;
  position: number;
  title: string;
  subtasks: Subtask[];
  description: string;
  isComplete: boolean;
  priority: PriorityLevel;
}

const initialState: Task[] = [
  {
    id: 1,
    position: 1,
    title: "task 1",
    subtasks: [
      {
        id: 1,
        title: "subtask 1",
        isComplete: false,
      },
      {
        id: 2,
        title: "subtask 2",
        isComplete: false,
      },
      {
        id: 3,
        title: "subtask 3",
        isComplete: false,
      },
    ],
    description: "Przywiet 1",
    isComplete: false,
    priority: "A",
  },
  {
    id: 2,
    position: 2,
    title: "task 2",
    subtasks: [],
    description: "Przywiet 2",
    isComplete: true,
    priority: "E",
  },
  {
    id: 3,
    position: 3,
    title: "task 3",
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "C",
  },
  {
    id: 4,
    position: 4,
    title: "task 4",
    subtasks: [],
    description: "Przywiet 4",
    isComplete: false,
    priority: "B",
  },
  {
    id: 5,
    position: 5,
    title: "task 5",
    subtasks: [],
    description: "Przywiet 5",
    isComplete: false,
    priority: "D",
  },
];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state: Task[], action: PayloadAction<{ title: string }>) => {
      const biggestPosition: number = state.reduce<number>(
        (maxPosition, task) => {
          return task.position > maxPosition ? task.position : maxPosition;
        },
        0
      );
      const newTask: Task = {
        id: Date.now(),
        position: biggestPosition,
        title: action.payload.title,
        subtasks: [],
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
      const taskIndex = state.findIndex(
        (task) => task.id === action.payload.id
      );
      state[taskIndex].isComplete = action.payload.isComplete;
    },
    deleteTask: (state: Task[], action: PayloadAction<{ id: number }>) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
    editTask: (state: Task[], action: PayloadAction<{ task: Task }>) => {
      const taskIndex = state.findIndex(
        (task) => task.id === action.payload.task.id
      );
      state[taskIndex] = action.payload.task;
    },
    setPriorityTask: (
      state: Task[],
      action: PayloadAction<{
        id: number;
        priority: PriorityLevel;
      }>
    ) => {
      const taskIndex = state.findIndex(
        (task) => task.id === action.payload.id
      );
      state[taskIndex].priority = action.payload.priority;
    },
    addSubtask: (
      state: Task[],
      action: PayloadAction<{
        taskId: number;
        title: string;
      }>
    ) => {
      const newSubtask: Subtask = {
        id: Date.now(),
        title: action.payload.title,
        isComplete: false,
      };
      const taskIndex = state.findIndex(
        (task) => task.id === action.payload.taskId
      );
      state[taskIndex].subtasks.push(newSubtask);
    },
    completeSubtask: (
      state: Task[],
      action: PayloadAction<{
        taskId: number;
        subtaskId: number;
        isComplete: boolean;
      }>
    ) => {
      const taskIndex = state.findIndex(
        (task) => task.id === action.payload.taskId
      );
      const subtaskIndex = state[taskIndex].subtasks.findIndex(
        (subtask) => subtask.id === action.payload.subtaskId
      );
      state[taskIndex].subtasks[subtaskIndex].isComplete =
        action.payload.isComplete;
    },
    deleteSubtask: (
      state: Task[],
      action: PayloadAction<{ taskId: number; subtaskId: number }>
    ) => {
      const taskIndex = state.findIndex(
        (task) => task.id === action.payload.taskId
      );
      state[taskIndex].subtasks = state[taskIndex].subtasks.filter(
        (subtask) => subtask.id !== action.payload.subtaskId
      );
    },
  },
});

export const {
  addTask,
  completeTask,
  deleteTask,
  editTask,
  setPriorityTask,
  addSubtask,
  completeSubtask,
  deleteSubtask,
} = taskSlice.actions;

export default taskSlice.reducer;
