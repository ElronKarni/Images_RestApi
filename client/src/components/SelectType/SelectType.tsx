import { useDispatch, useSelector } from "react-redux";
import { selectTypeActions } from "../../redux/slices/selectType";
import { photosActions } from "../../redux/slices/photos";
import { RootState } from "../../redux/store";
import React, { useRef } from "react";
import classes from "./SelectType.module.scss";
import axios from "axios";

const SelectType = () => {
  // Get the current state of the selectType Modal from the Redux store
  const showModal = useSelector(
    (state: RootState) => state.selectType.showModal
  );
  const dispatch = useDispatch();

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Dispatch an action to update the selected type in the Redux store
    dispatch(selectTypeActions.setSelectedType(event.target.value));

    // Dispatch an action to hide the modal
    dispatch(selectTypeActions.setShowModal());

    // Dispatch an action to reset the page to "initial" in the Redux store
    dispatch(photosActions.setPage("initial"));
  };

  const modalRef = useRef(null);

  // Handle the modal close event by checking if the user clicked outside of the modal Content.
  // If the event target is the modal container, exit the modal by dispatching an action.
  const handleCloseModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === modalRef.current) {
      dispatch(selectTypeActions.setShowModal());
    }
  };

  return (
    <div>
      {showModal ? (
        <div>
          <button className={classes.select_type_button}>
            Select Photos Type
          </button>
          <div
            className={classes.modal}
            ref={modalRef}
            onClick={handleCloseModal}
          >
            <div className={classes.modal_content}>
              <h2>Select Type</h2>
              <select onChange={handleTypeChange}>
                <option>select</option>
                <option>sport</option>
                <option>animals</option>
                <option>work</option>
                <option>code</option>
              </select>
              <button
                onClick={() => dispatch(selectTypeActions.setShowModal())}
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          className={classes.select_type_button}
          onClick={() => dispatch(selectTypeActions.setShowModal())}
        >
          Select Photos Type
        </button>
      )}
    </div>
  );
};

export default SelectType;
