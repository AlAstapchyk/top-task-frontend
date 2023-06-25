import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import RightPanel from "../components/RightPanel";
import { Task } from "./taskSlice";

export enum RightPanelType {
  close = 0,
  createTask,
  showTask,
}

export interface RightPanel {
  type?: RightPanelType;
  id?: number;
}

const initialState: RightPanel = {
  type: RightPanelType.close,
};

const RightPanelSlice = createSlice({
  name: "rightPanel",
  initialState,
  reducers: {
    setRightPanelTask: (
      state: RightPanel,
      action: PayloadAction<{ id: number }>
    ) => {
      state.type = RightPanelType.showTask;
      state.id = action.payload.id;
    },
    setRightPanelType: (
      state: RightPanel,
      action: PayloadAction<{ type: RightPanelType }>
    ) => {
      state.type = action.payload.type;
    },
  },
});

export const { setRightPanelTask, setRightPanelType } = RightPanelSlice.actions;
export default RightPanelSlice.reducer;
