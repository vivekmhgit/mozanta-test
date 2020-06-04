import React from "react";

export const WindowFilter = ({ window, handleWindowChange }) => {
  return (
    <div className='select-box'>
      Window
      <select
        className='browser-default'
        value={window}
        onChange={(e) => handleWindowChange(e)}
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
