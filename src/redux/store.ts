import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import rightPanelReducer from "./RightPanelSlice";
import leftPanelReducer from "./LeftPanelSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    rightPanel: rightPanelReducer,
    leftPanel: leftPanelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
