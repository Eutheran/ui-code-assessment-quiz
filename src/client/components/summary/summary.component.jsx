import React from 'react';
import CustomButton from '../button/button.component';
import './summary.css';

function Summary(props) {
  return (
    <div className="summary-container">
      <h2 id="summary-h2">SUMMARY</h2>
      <div>
        <span className="summary-span">
          Correct: <b>{props.score.correct}</b>
        </span>
        <span className="summary-span">
          Wrong: <b>{props.score.incorrect}</b>
        </span>
        <span className="summary-span">
          Questions Answered: <b>{props.score.count}</b>
        </span>
        <span className="summary-span">
          Final Score: <b>{20 * props.score.correct}%</b>
        </span>
      </div>
      <CustomButton onClick={props.resetState} name={'Restart Quiz'} />
    </div>
  );
}

export default Summary;
