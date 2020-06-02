import React, { useState } from "react";
import test from "../../../src/test.jpg";
import { ImageDetails } from "./ImageDetails";

export const ImageThumbnail = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='thumbnail'>
      <img onClick={handleImageClick} src={test} alt='test' />
      <div>img desc</div>
      <ImageDetails
        isModalOpen={isModalOpen}
        image={image}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};
