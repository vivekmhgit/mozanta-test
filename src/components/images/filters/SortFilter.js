import React from "react";

export const SortFilter = ({ sort, handleSortChange }) => {
  return (
    <div className='select-box'>
      Sort
      <select
        className='browser-default'
        value={sort}
        onChange={(e) => handleSortChange(e)}
      >
        <option value='viral'>Viral</option>
        <option value='top'>Top</option>
        <option value='time'>Time</option>
      </select>
    </div>
  );
};
