import React from "react";

export const ViralCheckbox = ({ isViralChecked, onViralToggle }) => {
  return (
    <form>
      <p>
        <label>
          <input
            type='checkbox'
            onChange={onViralToggle}
            checked={isViralChecked}
            className='filled-in checkbox-pink'
          />
          <span>Include Viral</span>
        </label>
      </p>
    </form>
  );
};
