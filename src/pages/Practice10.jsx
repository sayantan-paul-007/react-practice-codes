import React, { Component } from 'react'
// Event Handling using Class Component
class Practice10 extends Component {
  newClick(){ alert("hello")}
  render() {
    return (
      <button onClick={this.newClick}>
Click here
      </button>
    )
  }
}
// The differnce between Practice10 and Practice11 is that both have been called using this keyword with reference to the variable name (without parenthesis) and in Practice10, the event function is called without constructor whereas in Practice11, the event function is called within constructor so, bind method is a necessary thing to implement or else things won't work properly
export default Practice10