import { useDispatch, useSelector } from "react-redux";
import { photosActions } from "../../redux/slices/photos";
import { RootState } from "../../redux/store";
import { photoInterface } from "../../Interfaces/photos";
import classes from "./PhotoInformationModal.module.scss";
import { useRef } from "react";

const PhotoInformationModal = () => {
  // Access the 'photoInformation' state from the Redux store
  const photoInformation = useSelector(
    (state: RootState) => state.photos.photoInformation as photoInterface
  );
  const dispatch = useDispatch();

  const modalRef = useRef(null);

  // Handle the modal close event by checking if the user clicked outside of the modal Content.
  // If the event target is the modal container, exit the modal by dispatching an action.
  const handleCloseModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === modalRef.current) {
      dispatch(photosActions.setPhotoInformation({}));
    }
  };
  return (
    <div className={classes.modal} ref={modalRef} onClick={handleCloseModal}>
      <div className={classes.modal_content}>
        <h2>Photo Information</h2>
        <img src={photoInformation.previewURL} />
        <h3>views: {photoInformation.views}</h3>
        <h3>downloads: {photoInformation.downloads}</h3>
        <h3>collections: {photoInformation.collections}</h3>
      </div>
      <button onClick={() => dispatch(photosActions.setPhotoInformation({}))}>
        Go Back
      </button>
    </div>
  );
};

export default PhotoInformationModal;
