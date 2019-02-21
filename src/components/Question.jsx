import React, { Component } from 'react';
// import components
import {AnswerButton} from './AnswerButton.jsx';
import {QuestionText} from './QuestionText.jsx';

export class Question extends Component {
 constructor(props){
    super(props);
    this.state = {question: {},
      currentQuestion:{
        question_text: "lahdhs?",
        choices: [],
        correct_choice_index: null
      }
    }
  }
  answerButtonClicked(){
    
  }
  goToNextQuestion(){
    //const currentQ = this.state.currentQuestion;
    this.getQuestion(this.state.currentQuestion);
    this.setState({question: "nextQuestion"});
  }
  render(){
    return(
      <div className="title">
        <div>
            <h1 class ="head"> Trivia </h1>
            <QuestionText text= {this.state.currentQuestion.question_text}>
            <AnswerButton onAnswerClick={() => this.gotoNextQuestion()} choices= {this.state.currentQuestion.choices[0]}/>
            <AnswerButton onAnswerClick={() => this.gotoNextQuestion()} choices= {this.state.currentQuestion.choices[1]}/>
            <AnswerButton onAnswerClick={() => this.gotoNextQuestion()} choices= {this.state.currentQuestion.choices[2]}/>
            <AnswerButton onAnswerClick={() => this.gotoNextQuestion()} choices= {this.state.currentQuestion.choices[3]}/>
            </QuestionText>
          </div> 
      </div>
      
    );
  }
}
