import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "63701cc1f03239c72c00017f",
  drawerOpen: false,
  showSearchBox: false,
  filter: "",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setDrawerOpen: (state, action) => {
      state.drawerOpen = action.payload;
    },
    setShowSearchBox: (state, action) => {
      state.showSearchBox = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setMode, setDrawerOpen, setShowSearchBox, setFilter } =
  globalSlice.actions;

export default globalSlice.reducer;
