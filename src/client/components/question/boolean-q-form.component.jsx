import React from 'react';
import './question-style.css';
import CustomButton from '../button/button.component';

const BooleanForm = () => {
  return (
    <div className="question-container">
      <form>
        <div className="radio-box">
          <label>
            <input type="radio" value="true" />
            <span>True</span>
          </label>
        </div>
        <div className="radio-box">
          <label>
            <input type="radio" value="false" />
            <span>False</span>
          </label>
        </div>
      </form>
      <CustomButton />
    </div>
  );
};

export default BooleanForm;

// {
//   "type":"boolean",
//   "question":"Igneous rocks are formed by excessive heat and pressure.",
//   "correct_answer":"False",
//   "incorrect_answers":[
//     "True"
//   ]
// },
