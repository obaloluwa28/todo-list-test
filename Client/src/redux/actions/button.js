// Get search response
export const buttonClick = (buttonstate) => ({
  type: "ButtonClick",
  payload: buttonstate,
});

export const toggleMode = (modestate) => ({
  type: "TOGGLE_MODE",
  payload: modestate,
});

export const sidebartoggleMode = (togglestate) => ({
  type: "SidebarToggle",
  payload: togglestate,
});

export const setActiveButton = (tabstate) => ({
  type: "TopNavbar",
  payload: tabstate,
});

export const setActivePage = (tabvalue) => ({
  type: "Sidebartab",
  payload: tabvalue,
});
