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
    this.state = {question: {},
      currentQuestion:{
        question_text: "lahdhs?",
        choices: [],
        correct_choice_index: null
      }
     /* firebaseDatabase.ref('/questions').on('value', (snapshot)=> {
        lets questions = snaphot.val();
        let randomQuestion = getRandomQuestion(questions)
        this.setState({
            questions: questions,
            currentQuestion: randomQuestion,
        })
     }) */
    }
    getQuestions((questions) => {
      console.log(questions);
      this.setState({
        ...this.state,
        currentQuestion: questions[0]
      });
    });
  }

  onResetButtonClicked(){
    //set question to new one
  }
  answerButtonClicked(){
    this.setState({
      shouldDisplayAnser: true
    })
  }
  goToNextQuestion(){
    //const currentQ = this.state.currentQuestion;
    this.getQuestions(this.state.currentQuestion);
    this.setState({question: "nextQuestion"});
  }
  render(){
    return(
      <div className="app">
        <div>
            <h1 className="head"> Trivia </h1>
            <QuestionText text={this.state.currentQuestion.question_text} answerButtonClicked= {this.props.answerButtonClicked}/>
            <AnswerButton onAnswerClick={() => this.gotoNextQuestion()} answerButtonClicked={this.props.answerButtonClicked} choices= {this.state.currentQuestion.choices[0]}/>
            <AnswerButton onAnswerClick={() => this.gotoNextQuestion()} answerButtonClicked={this.props.answerButtonClicked} choices= {this.state.currentQuestion.choices[1]}/>
            <AnswerButton onAnswerClick={() => this.gotoNextQuestion()} answerButtonClicked={this.props.answerButtonClicked} choices= {this.state.currentQuestion.choices[2]}/>
            <AnswerButton onAnswerClick={() => this.gotoNextQuestion()} answerButtonClicked={this.props.answerButtonClicked} choices= {this.state.currentQuestion.choices[3]}/>
          </div> 
      </div>
      
    );
  }
}

  
export default App;