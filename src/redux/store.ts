import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import rightPanelReducer from "./RightPanelSlice";
import leftBarReducer from "./LeftBarSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    rightPanel: rightPanelReducer,
    leftBar: leftBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
