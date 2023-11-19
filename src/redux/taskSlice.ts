import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Subtask {
  id: number;
  title: string;
  isComplete: boolean;
}

export type PriorityLevel = "A" | "B" | "C" | "D" | "E";

export interface Task {
  id: number;
  priorityPosition: number;
  title: string;
  subtasks: Subtask[];
  description: string;
  isComplete: boolean;
  priority: PriorityLevel;
}

const initialState: Task[] = [
  {
    id: 1,
    priorityPosition: 1,
    title:
      "Conduct critical systems checks on the Mars Rover to ensure its continued operation",
    subtasks: [
      {
        id: 1,
        title: "Rover systems check today",
        isComplete: false,
      },
      {
        id: 2,
        title: "Optimize all systems",
        isComplete: false,
      },
    ],
    description: "<div>Data analysis is <b><u>crucial</u></b></div>",
    isComplete: false,
    priority: "A",
  },
  {
    id: 2,
    priorityPosition: 2,
    title: "Collaborate on ISS technical issue resolution",
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "A",
  },
  {
    id: 3,
    priorityPosition: 1,
    title: "Analyze Hubble Telescope data for study targets",
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "B",
  },
  {
    id: 4,
    priorityPosition: 2,
    title: "Lead risk assessment for spacewalk mission",
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "B",
  },
  {
    id: 5,
    priorityPosition: 3,
    title: "Breakfast",
    subtasks: [],
    description: "<i>Cześć</i>",
    isComplete: true,
    priority: "B",
  },
  {
    id: 6,
    priorityPosition: 4,
    title: "Calibrate James Webb Telescope instruments",
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "B",
  },
  {
    id: 7,
    priorityPosition: 1,
    title: "Develop astronaut training procedures",
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "C",
  },
  {
    id: 8,
    priorityPosition: 2,
    title: "Review colleague's space research paper",
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "C",
  },
  {
    id: 9,
    priorityPosition: 3,
    title: "Update Lunar Gateway maintenance docs",
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "C",
  },
  {
    id: 10,
    priorityPosition: 1,
    title: "Join weekly research project team meeting",
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "E",
  },
  {
    id: 11,
    priorityPosition: 2,
    title: " Handle urgent emails and communications",
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "E",
  },
  {
    id: 12,
    priorityPosition: 3,
    title: " Complete admin tasks, report submission",
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "E",
  },
  {
    id: 13,
    priorityPosition: 4,
    title: "Set up lab equipment for testing",
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "E",
  },
  {
    id: 14,
    priorityPosition: 5,
    title: "Attend safety training, ensure compliance",
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "E",
  },
];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (
      state: Task[],
      action: PayloadAction<{ title: string; priority: PriorityLevel }>
    ) => {
      state.forEach(
        (task) =>
          task.priority === action.payload.priority && task.priorityPosition++
      );
      const newTask: Task = {
        id: Date.now(),
        priorityPosition: 1,
        title: action.payload.title,
        subtasks: [],
        description: "",
        isComplete: false,
        priority: action.payload.priority ? action.payload.priority : "A",
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
      const currentTask = state.find((task) => task.id === action.payload.id);
      if (!currentTask) return state;

      const newState = state.map((task) => ({
        ...task,
        priorityPosition:
          task.id !== currentTask.id &&
          task.priority === currentTask.priority &&
          task.priorityPosition > currentTask.priorityPosition
            ? task.priorityPosition - 1
            : task.priorityPosition,
      }));

      return newState.filter((task) => task.id !== action.payload.id);
    },
    editTask: (state: Task[], action: PayloadAction<{ task: Task }>) => {
      const taskIndex = state.findIndex(
        (task) => task.id === action.payload.task.id
      );
      state[taskIndex] = action.payload.task;
    },
    setPriorityPositionTask: (
      state: Task[],
      action: PayloadAction<{
        id: number;
        newPosition: number;
        newPriority?: PriorityLevel;
      }>
    ) => {
      const currentTask = state.find((task) => task.id === action.payload.id);
      if (currentTask) {
        const oldCurrentTaskPosition = currentTask.priorityPosition;
        const oldCurrentTaskPriority = currentTask.priority;
        const isDefferentPriority =
          oldCurrentTaskPriority !== action.payload.newPriority;
        console.log(action.payload.newPosition);

        currentTask.priorityPosition = action.payload.newPosition;

        if (isDefferentPriority) {
          state
            .filter((task) => task.priority === oldCurrentTaskPriority)
            .forEach(
              (task) =>
                task.priorityPosition > oldCurrentTaskPosition &&
                task.id !== action.payload.id &&
                task.priorityPosition--
            );
          state
            .filter((task) => task.priority === action.payload.newPriority)
            .forEach(
              (task) =>
                task.priorityPosition >= action.payload.newPosition &&
                task.id !== action.payload.id &&
                task.priorityPosition++
            );
        } else {
          if (oldCurrentTaskPosition > action.payload.newPosition)
            state
              .filter((task) => task.priority === action.payload.newPriority)
              .forEach(
                (task) =>
                  task.priorityPosition >= currentTask.priorityPosition &&
                  task.priorityPosition < oldCurrentTaskPosition &&
                  task.id !== action.payload.id &&
                  task.priorityPosition++
              );
          else
            state
              .filter((task) => task.priority === action.payload.newPriority)
              .forEach(
                (task) =>
                  task.priorityPosition <= currentTask.priorityPosition &&
                  task.priorityPosition > oldCurrentTaskPosition &&
                  task.id !== action.payload.id &&
                  task.priorityPosition--
              );
        }
        if (action.payload.newPriority)
          currentTask.priority = action.payload.newPriority;
      }
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
  addSubtask,
  completeSubtask,
  deleteSubtask,
  setPriorityPositionTask,
} = taskSlice.actions;

export default taskSlice.reducer;