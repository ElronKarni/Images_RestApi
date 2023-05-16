import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { photosActions } from "./redux/slices/photos";
import { RootState } from "./redux/store";
import "./App.css";

import axios from "axios";
import PhotoGrid from "./components/PhotoGrid/PhotoGrid";
import SelectType from "./components/SelectType/SelectType";

function App() {
  const dispatch = useDispatch();

  // Access the 'page' state from the Redux store
  const page = useSelector((state: RootState) => state.photos.page);

  // Access the 'selectedType' state from the Redux store
  const selectedType = useSelector(
    (state: RootState) => state.selectType.selectedType
  );

  // Access the 'photos' state from the Redux store
  const photos = useSelector((state: RootState) => state.photos.photos);

  // Fetch photos based on the selected type and current page
  const fetchPhotos = async () => {
    const response = await axios.get(
      `http://localhost:3000/photos?category=${selectedType}&page=${page}&limit=${9}`
    );
    const data = response.data;

    // Dispatch an action to update the photos in the Redux store
    dispatch(photosActions.setPhotos(data));
  };

  // Fetch photos when the page or selected type changes
  useEffect(() => {
    fetchPhotos();
  }, [page, selectedType]);

  // Sending request to the server to sort the current photos by ID
  const handleSortById = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/photos/sortedPhotosById",
        {
          photos: photos,
        }
      );
      const sortedPhotos = response.data;
      dispatch(photosActions.setPhotos(sortedPhotos));
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <SelectType />
      <PhotoGrid />
      <button className="app_button" onClick={handleSortById}>
        SortById
      </button>
      <button className="app_button" onClick={() => fetchPhotos()}>
        SortRandom
      </button>
    </div>
  );
}

export default App;
