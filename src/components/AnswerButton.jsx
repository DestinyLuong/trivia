import React, { Component } from 'react';
// import components

export class AnswerButton extends Component {

  render() {
    return (
      //If button = correct, else
    //  if(this.){}
        <div className="btn">
          <button className= "answerbtn" id="answerOne" onClick={this.props.answerButtonClicked}>{this.props.choices}</button>  
        </div>
     // }
      //add onResetButtonClicked() to OnClick func
    );
  }
}


