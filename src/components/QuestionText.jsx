import React, { Component } from 'react';
// import components


export class QuestionText extends Component {
  
  render() {
    return (
      <div className= "qstion">
        <p>{this.props.text}</p>  
      </div>
    );
  }
}


