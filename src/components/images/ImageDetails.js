import React from "react";
import Modal from "react-modal";
import test from "../../../src/test.jpg";
const customDialogStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "50%",
    transform: "translate(-50%, -50%)",
    background: "#424242",
  },
};

export const ImageDetails = ({ isModalOpen, image, handleCloseModal }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customDialogStyles}
    >
      <div className='details-container'>
        <div className='details-title'> Title</div>
        <img src={test} alt='test' />
        <h6>Desc</h6>
        <h6>Upvotes-</h6>
        <h6>Downvotes-</h6>
        <button
          className='btn btn-floating pink lighten-1 close-button'
          onClick={handleCloseModal}
        >
          X
        </button>
      </div>
    </Modal>
  );
};
