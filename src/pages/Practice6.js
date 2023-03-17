import React, { Component } from 'react'
// State declaration using Class Component
class Practice6 extends Component {
    constructor(){
        super()
        this.state={
            msg:'Practice!'
        }
    }
    changeText(){
        this.setState(
            {
                msg:'Well Done'
            }
        )
    }
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={()=>this.changeText()}>Done</button>
        </div>
    )
  }
}
export default Practice6
