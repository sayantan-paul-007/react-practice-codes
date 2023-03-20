import React, { Component } from 'react'
// State declaration using Class Component
class Practice6 extends Component {
    constructor(){
        super()
        this.state={
            msg:'Practice!',
            msg2:'You have to practice'
        }
    }
    changeText(){
        this.setState(
            {
                msg:'Well Done', 
                msg2:'Going Great'
            }
        )
    }
  render() {
    return (
      <div>
        <h1>{this.state.msg2}</h1>
        <button onClick={()=>this.changeText()}>Press this button</button>
        </div>
    )
  }
}
export default Practice6
