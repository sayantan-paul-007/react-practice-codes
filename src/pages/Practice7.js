import React, { Component } from 'react'

export class Practice7 extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
incCount(){
    this.setState({
        count:this.state.count+1
    })
}

decCount(){
    this.setState({
        count:this.state.count - 1
    })
}
mulCount(){
    this.setState({
        count:this.state.count * this.state.count
    })
}
divCount(){
    this.setState({
        count:this.state.count / this.state.count
    })
}
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={()=>this.incCount()}>+</button>
        <button onClick={()=>this.decCount()}>-</button>
        <button onClick={()=>this.mulCount()}>x</button>
        <button onClick={()=>this.divCount()}>/</button>

      </div>
    )
  }
}

export default Practice7