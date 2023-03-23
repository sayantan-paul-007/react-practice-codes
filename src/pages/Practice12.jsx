import React, { Component } from 'react'
import Practice12Child from './Practice12Child'
// Implementation of methods as props
class Practice12 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        myName:'Sayantan'
      }
      this.greetYourself = this.greetYourself.bind(this)
    }
greetYourself(username){
    alert(`Hello My name is ${this.state.myName} frim ${username}`)
}
  render() {
    return (
      <div>
        <Practice12Child greetHandler={this.greetYourself}/>
        {/* Here, greetHandler is acting as the prop of the Practice12Child component which means that when we assign props to the Practice12Child it is directly passed on to the Practice12 Component */}
      </div>
    )
  }
}

export default Practice12