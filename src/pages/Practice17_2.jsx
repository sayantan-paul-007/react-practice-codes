import React, { Component } from 'react'

class Practice17_2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'Sayantan'
      }
      console.log('Lifecycle_2 const')
    }
    static getDerivedStateFromProps(props,state) {
        console.log('Lifecycle_2 gdsfp')
        return null;
    }
    componentDidMount(){
        console.log('life_2 cdm')
    }
  render() {
    console.log("Lifecycle_2 render")
    return (
      <div>Lifecycle_2</div>
    )
  }
}

export default Practice17_2
// There are 4 stages of Lifecycle_2 methods
// 1. Mounting - creation
// 2. Updating - changes
// 3. Unmounting - removed
// 4. Error Handling - when a error is triggered