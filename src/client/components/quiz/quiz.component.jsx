import React, { Component } from 'react';
import MultipleForm from '../question/multiple-q-form.component';
import InputForm from '../question/input-q-form.component';
import Summary from '../summary/summary.component';

import './quiz.css';

export default class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      questionList: [],
      activeQuestion: null,
      userAnswer: null,
      count: 0,
      correct: 0,
      incorrect: 0,
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
    let activeQuestion = this.state.questionList.pop();
    //randomize answers for multi choice questions
    if (activeQuestion.type === 'multiple') {
      let userChoices = [
        ...activeQuestion.incorrect_answers,
        activeQuestion.correct_answer,
      ];
      this.randomizeArr(userChoices);
      activeQuestion.userChoices = userChoices;
    }

    this.setState({
      activeQuestion,
      questionList: this.state.questionList,
    });
  };

  //Fisher-Yates randomization to randomize the Arr in o(n) time
  randomizeArr = inputArr => {
    for (let i = inputArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      //ES6 syntax to swap 2 variables at the same time
      [inputArr[i], inputArr[j]] = [inputArr[j], inputArr[i]];
    }
  };

  //to change all variables back to default but keep track of the non-used questions
  resetState = () => {
    this.setState({
      questionList: [...this.state.questionList],
      activeQuestion: null,
      userAnswer: null,
      count: 0,
      correct: 0,
      incorrect: 0,
    });
    this.setActiveQuestion();
  };

  handleChange = event => {
    this.setState({ userAnswer: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.activeQuestion.correct_answer === this.state.userAnswer) {
      this.setState({
        count: this.state.count + 1,
        correct: this.state.correct + 1,
        userAnswer: null,
      });
    } else {
      this.setState({
        count: this.state.count + 1,
        incorrect: this.state.incorrect + 1,
        userAnswer: null,
      });
    }
    this.setActiveQuestion();
  };

  //renders proper component depending on question type
  renderQuestionForm = activeQuestion => {
    if (
      activeQuestion.type === 'multiple' ||
      activeQuestion.type === 'boolean'
    ) {
      return (
        <MultipleForm
          activeQuestion={activeQuestion}
          userAnswer={this.state.userAnswer}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    } else {
      return (
        <InputForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  };

  render() {
    let { activeQuestion, count } = this.state;
    return (
      <div className="quiz-container">
        {activeQuestion && count < 5 ? (
          <>
            <h3>{activeQuestion.question}</h3>
            <div>{this.renderQuestionForm(activeQuestion)}</div>
          </>
        ) : null}
        <>
          {/* returns summary page if 5 questions have been answered */}
          {count === 5 ? (
            <Summary
              score={{
                count: this.state.count,
                correct: this.state.correct,
                incorrect: this.state.incorrect,
              }}
              resetState={this.resetState}
            />
          ) : null}
        </>
      </div>
    );
  }
}
