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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        // ignoredActions: ["your/action/type"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["payload.task", "payload.newDate", "payload.taskProps.due"],
        // Ignore these paths in the state
        ignoredPaths: ["tasks", "rightPanel", "payload.task"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
