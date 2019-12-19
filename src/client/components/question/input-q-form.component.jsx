import React from 'react';
import CustomButton from '../button/button.component';
import './question-style.css';

const InputForm = props => {
  return (
    <div className="question-container">
      <form onSubmit={props.handleSubmit}>
        <input className="text-box" type="text"></input>
        <CustomButton type="submit" name={'NEXT'} />
      </form>
    </div>
  );
};

export default InputForm;
