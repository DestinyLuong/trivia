import React, { Component } from 'react';
// import components
import {AnswerButton} from './AnswerButton.jsx';
import {QuestionText} from './QuestionText.jsx';

export class Question extends Component {
  
  render() {
    return (
      <div className="title">
        <div>
            <h1> Trivia </h1>
            <QuestionText/>
            <AnswerButton/>
            <AnswerButton/>
            <AnswerButton/>
            <AnswerButton/>
          </div> 
      </div>
    );
  }
}

