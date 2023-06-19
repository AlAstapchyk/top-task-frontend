import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import rightPanelReducer from "./RightPanelSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    rightPanel: rightPanelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
