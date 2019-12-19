import React from 'react';
import CustomButton from '../button/button.component';
import './summary.css';

//NEED TO BOLD THE NUMBERS THAT RETURN CORRECT WRONG QAs FINAL SCORE
function Summary(props) {
  return (
    <div className="summary-container">
      <h2 id="summary-h2">SUMMARY</h2>
      <div>
        <span className="summary-span">Correct: {props.score.correct}</span>
        <span className="summary-span">Wrong: {props.score.incorrect}</span>
        <span className="summary-span">
          Questions Answered: {props.score.count}
        </span>
        <span className="summary-span">
          Final Score: {20 * props.score.correct}%
        </span>
      </div>
      <CustomButton onClick={props.resetState} name={'Restart Quiz'} />
    </div>
  );
}

export default Summary;
