import React from 'react';

import './button.css';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      Next
    </button>
  );
};

export default CustomButton;
