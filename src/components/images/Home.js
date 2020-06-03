import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { ImageThumbnail } from "./ImageThumbnail";
import { ViralCheckbox } from "./ViralCheckbox";

export const Home = () => {
  // states for the component
  const [isViralChecked, setIsViralChecked] = useState(true);
  const [imagesData, setImagesData] = useState([]);

  // to implement api request on page load
  useEffect(() => {
    fetchImages();
  }, []);

  // fn using axios to fetch data
  const fetchImages = () => {
    axios
      .get("https://api.imgur.com/3/gallery/random/random/", {
        headers: {
          "Content-type": "application/json",
          Authorization: "Client-ID 7ab3a4ecdcf8a21",
        },
      })
      .then((response) => {
        setImagesData(response.data.data);
      })
      .catch((error) => {});
  };

  // fn to toggle images based on Viral filter
  const filteredImagesData = imagesData.filter((image) => {
    return isViralChecked ? imagesData : !image.in_most_viral;
  });

  // fn to toggle checkbox
  const handleViralChecked = () => {
    setIsViralChecked(!isViralChecked);
  };
  return (
    <Fragment>
      <div className='viral-checkbox'>
        <ViralCheckbox
          isViralChecked={isViralChecked}
          onViralToggle={handleViralChecked}
        />
      </div>
      <div className='gallery-container'>
        {filteredImagesData.length ? (
          filteredImagesData.map((image) => (
            <ImageThumbnail key={image.id} image={image} />
          ))
        ) : (
          <div className='no-content'>Oops! No images found</div>
        )}
      </div>
    </Fragment>
  );
};
