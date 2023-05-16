import { useDispatch, useSelector } from "react-redux";
import { photosActions } from "../../redux/slices/photos";
import { photoInterface } from "../../Interfaces/photos";
import { RootState } from "../../redux/store";
import PhotoInformationModal from "../PhotoInformationModal/PhotoInformationModal";
import classes from "./PhotoGird.module.scss";

const PhotoGrid = () => {
  const dispatch = useDispatch();

  // Access the 'page' state from the Redux store
  const page = useSelector((state: RootState) => state.photos.page);

  // Access the 'photos' state from the Redux store
  const photos = useSelector((state: RootState) => state.photos.photos);

  // Access the 'showpPhotoInformationModal' state from the Redux store
  const showpPhotoInformationModal = useSelector(
    (state: RootState) => state.photos.showpPhotoInformationModal
  );

  // Access the 'selectedType' state from the Redux store
  const selectedType = useSelector(
    (state: RootState) => state.selectType.selectedType
  );

  const handlePhotoInformation = (photo: photoInterface) => {
    // Dispatch the action to set the photo information
    dispatch(photosActions.setPhotoInformation(photo));
  };

  return (
    <div>
      {showpPhotoInformationModal ? (
        <PhotoInformationModal />
      ) : (
        <div>
          <h2>Current Type: {selectedType}</h2>
          <div className={classes.photo_grid}>
            {photos.map((photo: photoInterface) => (
              <img
                className={classes.image}
                key={photo.id}
                onClick={() => handlePhotoInformation(photo)}
                src={photo.previewURL}
              />
            ))}
          </div>
          <h3>page: {page}</h3>
          <button
            className={classes.prev_button}
            onClick={() => dispatch(photosActions.setPage("prev"))}
          >
            prev
          </button>
          <button
            className={classes.next_button}
            onClick={() => dispatch(photosActions.setPage("next"))}
          >
            next
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoGrid;
