import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
   
    this.state = {
       username:'',
       comments:'',
       topic: 'vue'
    }
  }
  usernameChange = (event) =>{
    this.setState({
      username: event.target.value
    })
  }
  commentChange = event =>{
    this.setState({
      comments: event.target.value
    })
  }
  selectOption = event =>{
    this.setState({
      topic: event.target.value
    })
  }
  handleSubmit= event => {
    alert(`My Name is: ${this.state.username}. I have commented : ${this.state.comments} on the topic: ${this.state.topic}`)
  }
  render() {
    const {username, comments,topic} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={this.usernameChange}/>
        </div>
        <div>
          <label> Comments
          </label>
            <textarea value={comments} onChange={this.commentChange}>
              </textarea>
             
              </div>
              <div>
                <label>Topic</label>
                <select value={topic} onChange={this.selectOption}>
                  <option value="react">React</option>
                  <option value="angular">Angular</option>
                  <option value="vue">Vue</option>
                </select>
              </div>
              <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form