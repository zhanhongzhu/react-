import React, { Component } from 'react'

class CommentInput extends Component {
	constructor () {
	    super()
	    this.state = {
	      username: '',
	      content: ''
	    }
	}
	
	 handleUsernameChange (event) {
	    this.setState({
	      username: event.target.value
	    })
	}
	
	handleContentChange (event) {
	    this.setState({
	      content: event.target.value
	    })
	}
	
	 handleSubmit () {
	    if (this.props.onSubmit) {
	      const { username, content } = this.state
	      this.props.onSubmit({
			  username, 
			  content
			})
	    }
		console.log(this.state)
	    this.setState({ content: '' })
	  }
	 
	render() {
    return (
      <div className="user-box">
		<div className="username-input">
			<label>用户名:</label>
			<input type="text" placeholder="请输入用户名" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} />
		</div>
		
		<div className="comment-input">
			<label>评论:</label>
			<textarea placeholder="请输入评论" value={this.state.content} onChange={this.handleContentChange.bind(this)} ></textarea>
		</div>
		
		<div className="publish">
		<button onClick={this.handleSubmit.bind(this)}>发布</button></div>
	  </div>
    )
  }
}

export default CommentInput