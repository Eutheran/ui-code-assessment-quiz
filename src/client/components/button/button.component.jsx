import React from 'react';

import './button.css';

const CustomButton = ({ name, handleSubmit, children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps} onSubmit={handleSubmit}>
      {name}
    </button>
  );
};

export default CustomButton;
