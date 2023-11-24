import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LeftPanel {
  isOpen: boolean;
  searchValue: string;
}
const initialState: LeftPanel = {
  isOpen: true,
  searchValue: "",
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
    setSearchValue: (
      state: LeftPanel,
      action: PayloadAction<{ searchValue: string }>
    ) => {
      state.searchValue = action.payload.searchValue;
    },
  },
});

export const { setLeftPanelIsOpen, setSearchValue } = LeftBarSlice.actions;
export default LeftBarSlice.reducer;
