import React, { Component } from 'react';
import '../css/App.css';
// import components
import {Question} from './Question.jsx';

import firebase from 'firebase';



class App extends Component {
  constructor(props){
    super(props);
    firebase.getQuestion((questions) => console.log(questions));
  }
  onResetButtonClicked(){
    //set question to new one

  }
  render() {
    return (
      <div className="app">
        <Question/>
        
      </div>
    );
  }
}

export default App;