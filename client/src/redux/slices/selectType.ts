import { createSlice } from "@reduxjs/toolkit";

// Initial state for the selectType slice
const initialState = {
  showModal: false,
  selectedType: "sports",
};

// Create a selectType slice using createSlice from Redux Toolkit
export const selectTypeSlice = createSlice({
  name: "selectType",
  initialState,
  reducers: {
    // Reducer for toggling the showModal value
    setShowModal: (state) => {
      state.showModal = !state.showModal;
    },
    // Reducer for setting the selectedType value
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },
  },
});

// Export the action creators generated by createSlice
export const selectTypeActions = selectTypeSlice.actions;

// Export the reducer generated by createSlice
export default selectTypeSlice.reducer;