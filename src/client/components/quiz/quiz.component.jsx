import React, { Component } from 'react';
import BooleanForm from '../question/boolean-q-form.component';
import MultipleForm from '../question/multiple-q-form.component';
import InputForm from '../question/input-q-form.component';

import './quiz.css';

export default class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      questionList: [],
      activeQuestion: null,
      count: 0,
      questionResults: { correct: 0, incorrect: 0, total: 0 },
    };
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/questions')
      .then(res => res.json())
      .then(data => {
        let questions = data.results;
        this.randomizeArr(questions);
        this.setState({ questionList: questions });
      })
      .then(() => this.setActiveQuestion());
  }

  setActiveQuestion = () => {
    let { count, questionList, activeQuestion } = this.state;
    if (count < 5 || null) {
      this.setState({
        count: count++,
        activeQuestion: questionList.pop(),
        questionList: questionList,
      });
    }
  };

  //Fisher-Yates randomization to randomize the Arr in o(n) time
  randomizeArr = inputArr => {
    for (let i = inputArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      //ES6 syntax to swap 2 variables at the same time
      [inputArr[i], inputArr[j]] = [inputArr[j], inputArr[i]];
    }
  };

  renderQuestionForm = activeQuestion => {
    if (activeQuestion.type === 'multiple') {
      return <MultipleForm props={activeQuestion} />;
    } else if (activeQuestion.type === 'boolean') {
      return <BooleanForm />;
    } else {
      return <InputForm />;
    }
  };

  render() {
    let { activeQuestion } = this.state;
    return (
      <div className="quiz-container">
        {activeQuestion ? (
          <>
            <h3>{activeQuestion.question}</h3>
            <div>{this.renderQuestionForm(activeQuestion)}</div>
          </>
        ) : null}
      </div>
    );
  }
}
