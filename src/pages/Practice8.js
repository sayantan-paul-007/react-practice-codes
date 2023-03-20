import React, { Component } from 'react'
// Destructing props and state
// What is destructuring? Destructuring is a method of declaration wherein multiple variables are assigned to a value
export class Practice8 extends Component {
    
    
  render() {
    const {name, surname} = this.props;
   
    return (
      <>
      <h1>My name is {this.props.name} {this.props.surname}</h1>
     
      </>
    )
  }
}

export default Practice8