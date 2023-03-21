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

export default Practice10