import React, { useState, useEffect } from "react";
import axios from "axios";
import { ImageThumbnail } from "./ImageThumbnail";

export const Home = () => {
  const [imagesData, setImagesData] = useState([
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
  ]);
  useEffect(() => {
    // fetchImages();
  }, []);

  const fetchImages = () => {
    axios
      .get("https://api.imgur.com/3/gallery.json", {
        headers: {
          Authorization: "Client-ID",
        },
      })
      .then((response) => {
        setImagesData(response.data);
      })
      .catch((error) => {});
  };

  return (
    <div className='gallery-container'>
      {imagesData &&
        imagesData.map((image) => <ImageThumbnail image={image} />)}
    </div>
  );
};
