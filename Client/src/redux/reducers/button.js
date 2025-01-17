import { createAction, createReducer } from "@reduxjs/toolkit";

// Actions
const ButtonClick = createAction("ButtonClick");
const TOGGLE_MODE = createAction("TOGGLE_MODE");
const TopNavbar = createAction("TopNavbar");
const SidebarToggle = createAction("SidebarToggle");
const Sidebartab = createAction("Sidebartab");

// Initial state
const initialState = {
  buttonclick: 0,
  mode: "light", // Default mode is light
  activeButton: "toprental",
  sidebar: false,
  tab: "Dashboard",
};

// Reducer
export const buttonReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ButtonClick, (state, action) => {
      state.buttonclick = action.payload;
    })

    .addCase(TOGGLE_MODE, (state) => {
      // Dynamically toggle between "light" and "dark"
      state.mode = state.mode === "light" ? "dark" : "light";
    })

    .addCase(SidebarToggle, (state, action) => {
      state.sidebar = state.sidebar === false ? true : false;
    })

    .addCase(TopNavbar, (state, action) => {
      state.activeButton = action.payload;
    })

    .addCase(Sidebartab, (state, action) => {
      state.tab = action.payload;
    });
});
