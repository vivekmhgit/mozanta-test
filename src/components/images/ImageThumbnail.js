import React, { useState } from "react";
import { ImageDetails } from "./ImageDetails";
import { useTruncate } from "../../hooks/useTruncate";

export const ImageThumbnail = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //   fns to open and close modal
  const handleImageClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  //   using custom hook to truncate string
  const truncTitle = useTruncate(image.title);

  return (
    <div className='thumbnail'>
      <img onClick={handleImageClick} src={image.link} alt='loading...' />
      <div className='description'>{truncTitle}</div>
      <ImageDetails
        isModalOpen={isModalOpen}
        image={image}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};
