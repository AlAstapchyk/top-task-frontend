import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Subtask {
  id: number;
  title: string;
  isComplete: boolean;
}

export type PriorityLevel = "A" | "B" | "C" | "D" | "E";

export interface Task {
  id: Readonly<number>;
  priorityPosition: number;
  title: string;
  createdAt: Date;
  completedAt: Date | null;
  due: Date | null;
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
    createdAt: new Date("2023-10-01T09:10:00.703413Z"),
    completedAt: null,
    due: new Date("2023-12-12T23:00:00.000Z"),
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
    description:
      "<div>Data analysis is <b><u>crucial</u></b></div></br><div><i>!!!</i></div>",
    isComplete: false,
    priority: "A",
  },
  {
    id: 2,
    priorityPosition: 2,
    title: "Collaborate on ISS technical issue resolution",
    createdAt: new Date("2023-10-01T09:11:00.703413Z"),
    completedAt: null,
    due: new Date("2023-12-15T23:00:00.000Z"),
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "A",
  },
  {
    id: 3,
    priorityPosition: 1,
    title: "Analyze Hubble Telescope data for study targets",
    createdAt: new Date("2023-10-01T09:12:00.703413Z"),
    completedAt: null,
    due: new Date("2023-12-18T23:00:00.000Z"),
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "B",
  },
  {
    id: 4,
    priorityPosition: 2,
    title: "Lead risk assessment for spacewalk mission",
    createdAt: new Date("2023-10-01T09:13:00.703413Z"),
    completedAt: null,
    due: new Date("2023-12-07T23:00:00.000Z"),
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "B",
  },
  {
    id: 5,
    priorityPosition: 3,
    title: "Breakfast",
    createdAt: new Date("1969-09-02T07:00:00Z"),
    completedAt: new Date("1970-09-02T08:00:00Z"),
    due: new Date("2023-10-01T23:00:00.000Z"),
    subtasks: [],
    description: "<i>Cześć</i>",
    isComplete: true,
    priority: "B",
  },
  {
    id: 6,
    priorityPosition: 4,
    title: "Calibrate James Webb Telescope instruments",
    createdAt: new Date("2023-10-01T09:15:00.703413Z"),
    completedAt: null,
    due: new Date("2023-12-10T23:00:00.000Z"),
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "B",
  },
  {
    id: 7,
    priorityPosition: 1,
    title: "Develop astronaut training procedures",
    createdAt: new Date("2023-10-01T09:16:00.703413Z"),
    completedAt: null,
    due: new Date("2023-12-09T23:00:00.000Z"),
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "C",
  },
  {
    id: 8,
    priorityPosition: 2,
    title: "Review colleague's space research paper",
    createdAt: new Date("2023-10-01T09:17:00.703413Z"),
    completedAt: null,
    due: new Date("2023-12-07T23:00:00.000Z"),
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "C",
  },
  {
    id: 9,
    priorityPosition: 3,
    title: "Update Lunar Gateway maintenance docs",
    createdAt: new Date("2023-10-01T09:18:00.703413Z"),
    completedAt: null,
    due: new Date("2023-12-06T23:00:00.000Z"),
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "C",
  },
  {
    id: 10,
    priorityPosition: 1,
    title: "Join weekly research project team meeting",
    createdAt: new Date("2023-10-01T09:19:00.703413Z"),
    completedAt: null,
    due: new Date("2023-12-05T23:00:00.000Z"),
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "E",
  },
  {
    id: 11,
    priorityPosition: 2,
    title: " Handle urgent emails and communications",
    createdAt: new Date("2023-10-01T09:20:00.703413Z"),
    completedAt: null,
    due: new Date("2023-03-09T23:00:00.000Z"),
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "E",
  },
  {
    id: 12,
    priorityPosition: 3,
    title: " Complete admin tasks, report submission",
    createdAt: new Date("2023-11-01T09:10:00.703413Z"),
    completedAt: null,
    due: new Date("2023-12-07T23:00:00.000Z"),
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "E",
  },
  {
    id: 13,
    priorityPosition: 4,
    title: "Set up lab equipment for testing",
    createdAt: new Date("2023-11-01T10:15:00.703413Z"),
    completedAt: null,
    due: new Date("2023-12-08T23:00:00.000Z"),
    subtasks: [],
    description: "",
    isComplete: false,
    priority: "E",
  },
  {
    id: 14,
    priorityPosition: 5,
    title: "Attend safety training, ensure compliance",
    createdAt: new Date("2023-11-01T11:20:00.703413Z"),
    completedAt: null,
    due: new Date("2023-12-09T23:00:00.000Z"),
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
      action: PayloadAction<{
        title: string;
        taskProps: Partial<Task>;
      }>
    ) => {
      const priority = action.payload.taskProps.priority;
      state.forEach(
        (task) => task.priority === (priority ?? "A") && task.priorityPosition++
      );

      const newTask: Task = {
        id: Date.now(),
        priorityPosition: 1,
        title: action.payload.title,
        createdAt: new Date(),
        completedAt: action.payload.taskProps.completedAt ?? null,
        due: action.payload.taskProps.due ?? null,
        subtasks: [],
        description: "",
        isComplete: false,
        priority: priority ?? "A",
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
      state[taskIndex].completedAt = action.payload.isComplete
        ? new Date()
        : null;
      state[taskIndex].isComplete = action.payload.isComplete;
    },
    editTask: (state: Task[], action: PayloadAction<{ task: Task }>) => {
      const taskIndex = state.findIndex(
        (task) => task.id === action.payload.task.id
      );
      state[taskIndex] = action.payload.task;
    },
    setDueTask: (
      state: Task[],
      action: PayloadAction<{ id: number; newDate: Date | null }>
    ) => {
      const taskIndex = state.findIndex(
        (task) => task.id === action.payload.id
      );
      state[taskIndex].due = action.payload.newDate;
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
      if (!currentTask) return;

      const oldCurrentTaskPosition = currentTask.priorityPosition;
      const oldCurrentTaskPriority = currentTask.priority;
      const isDifferentPriority =
        oldCurrentTaskPriority !== action.payload.newPriority;

      const completedTaskNumberBefore = state.filter(
        (task) =>
          task.isComplete &&
          task.priority === action.payload.newPriority &&
          task.priorityPosition <= action.payload.newPosition
      ).length;

      currentTask.priorityPosition =
        completedTaskNumberBefore + action.payload.newPosition;
      if (isDifferentPriority) {
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
  editTask,
  setDueTask,
  deleteTask,
  addSubtask,
  completeSubtask,
  deleteSubtask,
  setPriorityPositionTask,
} = taskSlice.actions;

export default taskSlice.reducer;
