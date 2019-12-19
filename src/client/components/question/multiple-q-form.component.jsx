import React from 'react';
import CustomButton from '../button/button.component';
import './question-style.css';

const MultipleForm = props => {
  //check if boolean question
  if (props.activeQuestion.incorrect_answers.length === 1) {
    return (
      <div className="question-container">
        <form onSubmit={props.handleSubmit}>
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
          <CustomButton type="submit" name={'NEXT'} />
        </form>
      </div>
    );
  } else {
    //randomize answers for multi choice questions
    let answers = [
      ...props.activeQuestion.incorrect_answers,
      props.activeQuestion.correct_answer,
    ];
    props.randomizeArr(answers);
    return (
      <div className="question-container">
        <form onSubmit={props.handleSubmit}>
          {answers.map((answer, idx) => {
            return (
              <div className="radio-box" key={idx}>
                <label>
                  <input
                    type="radio"
                    name="multiChoice"
                    value={answer}
                    onChange={props.handleChange}
                  />
                  <span>{answer}</span>
                </label>
              </div>
            );
          })}
          <CustomButton type="submit" name={'NEXT'} />
        </form>
      </div>
    );
  }
};

export default MultipleForm;
