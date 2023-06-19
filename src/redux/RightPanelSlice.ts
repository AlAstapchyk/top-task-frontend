import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import RightPanel from "../components/RightPanel";

export interface RightPanel {
  type: "createTask" | "showTask" | null;
  id?: number;
}

const initialState: RightPanel = {
  type: "showTask",
  id: 1,
};

const RightPanelSlice = createSlice({
  name: "rightPanel",
  initialState,
  reducers: {
    chooseTask: (state: RightPanel, action: PayloadAction<{ id: number }>) => {
      state.id = action.payload.id;
    }
  },
});

export const { chooseTask } = RightPanelSlice.actions;
export default RightPanelSlice.reducer;
