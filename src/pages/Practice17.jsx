import React, { Component } from 'react'
import Practice17_2 from './Practice17_2'

class Practice17 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'Sayantan'
      }
      console.log('Lifecycle const')
    }
    static getDerivedStateFromProps(props,state) {
        console.log('lifecycle gdsfp')
        return null;
    }
    componentDidMount(){
        console.log('life cdm')
    }
    shouldComponentUpdate(){
        console.log('lifecycle scu')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecycle gsbu')
    }
    componentDidUpdate(){
        console.log('lifecycle cmd')
    }
  render() {
    console.log("lifecycle render")
    return (
      <div>Lifecycle
        <div><Practice17_2/></div>
      </div>
      
    )
  }
}

export default Practice17
// There are 4 stages of lifecycle methods
// 1. Mounting - creation
// 2. Updating - changes
// 3. Unmounting - removed
// 4. Error Handling - when a error is triggered