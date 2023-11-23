import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LeftPanel {
  isOpen: boolean;
}
const initialState: LeftPanel = {
  isOpen: true,
};
const LeftBarSlice = createSlice({
  name: "leftBar",
  initialState,
  reducers: {
    setLeftPanelIsOpen: (
      state: LeftPanel,
      action: PayloadAction<{ isOpen: boolean }>
    ) => {
      state.isOpen = action.payload.isOpen;
    },
  },
});

export const { setLeftPanelIsOpen } = LeftBarSlice.actions;
export default LeftBarSlice.reducer;
