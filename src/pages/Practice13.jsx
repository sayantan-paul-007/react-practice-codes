// it will show conditional rendering which means components will render (show) as per the conditions given to them 
// According to Codevolution, there are 4 ways to achieve it:
// 1st (if/else)
import React, { Component } from 'react'

class Practice13 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLogged: true
      }
    }
  render() {
    // 1. If/else method
    // if(this.state.isLogged){
    //     return <h1>Welcome Sayantan</h1>
    // }
    // else{
    //     return <h1>Welcome Guest</h1>
    // }
    // return (
    //   <div>
    //       <h1>Welcome Sayantan</h1>
    //       <h1>Welcome Guest</h1>
    //   </div>
    // )
    // let message;
    // if(this.state.isLogged){
    //     message= <h1>Welcome Sayantan</h1>;
    // }
    // else{
    //     message= <h1>Welcome Guest</h1>;
    // }
    // return  <h1>{
    //     message}</h1>
        // 2. Assigning variable to elements


return(
    this.state.isLogged ?  <h1>Welcome Sayantan</h1> :  <h1>Welcome Guest</h1>
)

  }
}

export default Practice13