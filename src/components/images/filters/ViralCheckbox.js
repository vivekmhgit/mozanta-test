import React from "react";

export const ViralCheckbox = ({
  isViralChecked,
  onViralToggle,
  isCheckboxEnabled,
}) => {
  return (
    <form className='viral-checkbox'>
      <p>
        <label>
          <input
            type='checkbox'
            disabled={!isCheckboxEnabled}
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
