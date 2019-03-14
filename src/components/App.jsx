import React, { Component } from 'react';
import '../css/App.css';
// import components
//import {Question} from './Question.jsx';
import {getQuestions} from '../clients/firebase';
import {AnswerButton} from './AnswerButton.jsx';
import {QuestionText} from './QuestionText.jsx';


export class App extends Component {
 // var questionBank = [];
  constructor(props){
    super(props);
    this.state = {questions: [],
      currentQuestion:{
        question_text: "Question?",
        choices: [],
        correct_choice_index: null
      },
      questionNum: 0,
      choice: null
    }
    getQuestions((qs) => {
      console.log(qs);
      this.setState({
        ...this.state,
        questions: qs,
        currentQuestion: qs[this.state.questionNum]
      });
    });
  }

  onResetButtonClicked(){
    //set question to new one
  }
  changeBtnColor(choice){
    this.setState({
      choice,
    })
  }
  goToNextQuestion(){
    //const currentQ = this.state.currentQuestion;
    var newQuestionNum = this.state.questionNum + 1;
    this.setState({questionNum: newQuestionNum});
    this.setState({currentQuestion: this.state.questions[newQuestionNum]});
    console.log(this.state);
  }
  render(){
    var answerGreen = this.state.currentQuestion.correct_choice_index;
    var answerRed;
    if(answerGreen === this.state.currentQuestion.correct_choice_index){
      
    } else{
      
    }
    return(
      <div className="app">
        <div>
            <h1 className="head"> Trivia </h1>
            <QuestionText text={this.state.currentQuestion.question_text}/>
            <AnswerButton  answerIndex={0} answerButtonClicked={(c) => this.changeBtnColor(c)} choices= {this.state.currentQuestion.choices[0]}/>
            <AnswerButton  answerIndex={1} answerButtonClicked={(c) => this.changeBtnColor(c)} choices= {this.state.currentQuestion.choices[1]}/>
            <AnswerButton  answerIndex={2} answerButtonClicked={(c) => this.changeBtnColor(c)} choices= {this.state.currentQuestion.choices[2]}/>
            <AnswerButton  answerIndex={3} answerButtonClicked={(c) => this.changeBtnColor(c)} choices= {this.state.currentQuestion.choices[3]}/>
            <button id="nxt" onClick={() => this.goToNextQuestion()}>Next</button>
          </div> 
      </div>
      
    );
  }
}

  
export default App;