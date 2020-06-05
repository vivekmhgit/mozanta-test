import React from "react";
import { BsFilter } from "react-icons/bs";

export const SectionFilter = ({ section, handleSectionChange }) => {
  return (
    <div className='select-box'>
      <BsFilter />
      Section
      <select
        className='browser-default'
        value={section}
        onChange={(e) => handleSectionChange(e)}
      >
        <option value='hot'>Hot</option>
        <option value='top'>Top</option>
        <option value='user'>User</option>
      </select>
    </div>
  );
};
