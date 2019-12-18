import React from 'react';
import CustomButton from '../button/button.component';
import './question-style.css';

const MultipleForm = props => {
  //check if bool
  if (props.activeQuestion.incorrect_answers.length === 1) {
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
  } else {
    let answers = [
      ...props.activeQuestion.incorrect_answers,
      props.activeQuestion.correct_answer,
    ];
    props.randomizeArr(answers);
    return (
      <div className="question-container">
        <form>
          {answers.map((answer, idx) => {
            return (
              <div className="radio-box" key={idx}>
                <label>
                  <input type="radio" value={answer} />
                  <span>{answer}</span>
                </label>
              </div>
            );
          })}
        </form>
        <CustomButton />
      </div>
    );
  }
};

export default MultipleForm;

// {
//   "type":"multiple",
//   "question":"Which game did &quot;Sonic The Hedgehog&quot; make his first appearance in?",
//   "correct_answer":"Rad Mobile",
//   "incorrect_answers":[
//     "Sonic The Hedgehog",
//     "Super Mario 64",
//     "Mega Man"
//   ]
// }
