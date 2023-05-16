import { createSlice } from "@reduxjs/toolkit";

// Initial state for the photos slice
const initialState = {
  photos: [],
  photoInformation: {},
  showpPhotoInformationModal: false,
  page: 1,
};

// Create a photos slice using createSlice from Redux Toolkit
export const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    // Reducer for setting the photos
    setPhotos: (state, action) => {
      state.photos = action.payload;
    },
    // Reducer for setting the photo information and toggling the photo information modal
    setPhotoInformation: (state, action) => {
      state.photoInformation = action.payload;
      state.showpPhotoInformationModal = !state.showpPhotoInformationModal;
    },
    // Reducer for setting the page number
    setPage: (state, action) => {
      switch (action.payload) {
        case "prev":
          if (state.page !== 1) {
            state.page--;
          }
          break;
        case "next":
          if (state.page !== 3) {
            state.page++;
          }
          break;
        case "initial":
          state.page = 1;
          break;
        default:
          break;
      }
    },
  },
});

// Export the action creators generated by createSlice
export const photosActions = photosSlice.actions;

// Export the reducer generated by createSlice
export default photosSlice.reducer;
