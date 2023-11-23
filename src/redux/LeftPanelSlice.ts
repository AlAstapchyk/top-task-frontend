import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LeftPanel {
  isOpen: boolean;
}
const initialState: LeftPanel = {
  isOpen: true,
};
const LeftPanelSlice = createSlice({
  name: "leftPanel",
  initialState,
  reducers: {
    setRightPanelIsOpen: (
      state: LeftPanel,
      action: PayloadAction<{ isOpen: boolean }>
    ) => {
      state.isOpen = action.payload.isOpen;
    },
  },
});

export const { setRightPanelIsOpen } = LeftPanelSlice.actions;
export default LeftPanelSlice.reducer;
