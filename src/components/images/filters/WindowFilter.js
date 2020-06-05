import React from "react";
import { BsFilter } from "react-icons/bs";

export const WindowFilter = ({
  window,
  handleWindowChange,
  isWindowFilterEnabled,
}) => {
  return (
    <div className='select-box'>
      <BsFilter />
      Window
      <select
        className='browser-default'
        value={window}
        onChange={(e) => handleWindowChange(e)}
        disabled={!isWindowFilterEnabled}
      >
        <option value='day'>Day</option>
        <option value='week'>Week</option>
        <option value='year'>Year</option>
        <option value='month'>Month</option>
        <option value='all'>All</option>
      </select>
    </div>
  );
};
