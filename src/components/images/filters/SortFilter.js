import React from "react";
import { BsFilter } from "react-icons/bs";

export const SortFilter = ({ sort, handleSortChange, isRisingEnabled }) => {
  return (
    <div className='select-box'>
      <BsFilter />
      Sort
      <select
        className='browser-default'
        value={sort}
        onChange={(e) => handleSortChange(e)}
      >
        <option value='viral'>Viral</option>
        <option value='top'>Top</option>
        <option value='time'>Time</option>
        <option value='rising' disabled={!isRisingEnabled}>
          Rising
        </option>
      </select>
    </div>
  );
};
