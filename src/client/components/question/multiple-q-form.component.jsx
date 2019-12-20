import React from 'react';
import CustomButton from '../button/button.component';
import './question-style.css';

const MultipleForm = props => {
  return (
    <div className="question-container">
      <form onSubmit={props.handleSubmit}>
        {/* Check if bool question */}
        {props.activeQuestion.type === 'boolean' ? (
          <>
            <div className="radio-box">
              <label>
                <input
                  type="radio"
                  name="trueFalse"
                  value="true"
                  onChange={props.handleChange}
                />
                <span>True</span>
              </label>
            </div>
            <div className="radio-box">
              <label>
                <input
                  type="radio"
                  name="trueFalse"
                  value="false"
                  onChange={props.handleChange}
                />
                <span>False</span>
              </label>
            </div>
          </>
        ) : (
          props.activeQuestion.userChoices.map((choice, idx) => {
            return (
              <div className="radio-box" key={idx}>
                <label>
                  <input
                    type="radio"
                    name="multiple"
                    value={choice}
                    checked={props.userAnswer === choice}
                    onChange={props.handleChange}
                  />
                  <span>{choice}</span>
                </label>
              </div>
            );
          })
        )}
        <CustomButton type="submit" name={'NEXT'} />
      </form>
    </div>
  );
};

export default MultipleForm;
