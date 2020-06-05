import React from "react";
import Modal from "react-modal";
import { IoIosThumbsUp } from "react-icons/io";
import { IoIosThumbsDown } from "react-icons/io";

const customDialogStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "60%",
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
      ariaHideApp={false}
    >
      <div className='details-container'>
        <button
          className='btn btn-floating btn-small pink lighten-1 close-button'
          onClick={handleCloseModal}
        >
          x
        </button>
        <div className='details-title'>{image.title}</div>
        <img src={image.link} alt='loading...' />
        <h6>{image.description}</h6>
        <h6>
          Upvotes - {image.ups}
          <IoIosThumbsUp color='#ec407a'></IoIosThumbsUp>
        </h6>
        <h6>
          Downvotes - {image.downs}
          <IoIosThumbsDown color='#ec407a'></IoIosThumbsDown>
        </h6>
        <h6>Score - {image.score}</h6>
      </div>
    </Modal>
  );
};
