import React, { Component } from 'react'
// Event Binding: Event Binding is used to bind the function of states using .bind and 'this' keyword references to the object defined for it
class Practice11 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         nameinfo:'What is your name?'
      }
      this.newNameClick = this.newNameClick.bind(this)//Putting the onClick attribute in the constructor
    }
    newNameClick(){
        this.setState({
           nameinfo:"Sayantan Paul" 
        })
    }
    // Approach
    
  render() {
    return (
      <>
      <h1>{this.state.nameinfo}</h1>
      <button onClick={this.newNameClick}>Click</button>
      </>
    )
  }
}

export default Practice11