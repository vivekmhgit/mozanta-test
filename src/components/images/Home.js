import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { ImageThumbnail } from "./ImageThumbnail";
import { ViralCheckbox } from "./filters/ViralCheckbox";
import { SectionFilter } from "./filters/SectionFilter";
import { SortFilter } from "./filters/SortFilter";
import { WindowFilter } from "./filters/WindowFilter";

export const Home = () => {
  // states for the component
  const [isViralChecked, setIsViralChecked] = useState(true);
  const [imagesData, setImagesData] = useState([]);
  const [section, setSection] = useState("hot");
  const [sort, setSort] = useState("viral");
  const [window, setWindow] = useState("day");

  // to implement api request
  useEffect(() => {
    //to check if api url changes on filter criteria
    console.log(
      `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/showViral=${isViralChecked}`
    );
    axios
      .get(
        `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/showViral=${isViralChecked}`,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: "Client-ID 7ab3a4ecdcf8a21",
          },
        }
      )
      .then((response) => {
        setImagesData(response.data.data);
      })
      .catch((error) => {});
  }, [section, sort, window, isViralChecked]);

  // fns to set filter values
  const handleSectionChange = (e) => {
    setSection(e.target.value);
  };
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };
  const handleWindowChange = (e) => {
    setWindow(e.target.value);
  };
  const handleViralChecked = () => {
    setIsViralChecked(!isViralChecked);
  };

  return (
    <Fragment>
      <div className='filters'>
        <SectionFilter
          section={section}
          handleSectionChange={handleSectionChange}
        />
        <SortFilter sort={sort} handleSortChange={handleSortChange} />
        <WindowFilter window={window} handleWindowChange={handleWindowChange} />

        <ViralCheckbox
          isViralChecked={isViralChecked}
          onViralToggle={handleViralChecked}
        />
      </div>
      <div className='gallery-container'>
        {imagesData.length ? (
          imagesData.map((image) => (
            <ImageThumbnail key={image.id} image={image} />
          ))
        ) : (
          <div className='no-content'>Oops! No images found</div>
        )}
      </div>
    </Fragment>
  );
};
