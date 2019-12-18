import React from 'react';

import './button.css';

//fix this so that what the button says is based on what is left to do, NEXT, START, RESTART
const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      Next
    </button>
  );
};

export default CustomButton;
