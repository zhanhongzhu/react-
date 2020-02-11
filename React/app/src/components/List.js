import React, { Component } from 'react'

class CommentList extends Component {
  render() {
    return (
      <div className="comment-box">
		<div className="userName">{this.props.comment.username}:</div>
		<div className="comment">{this.props.comment.content}</div>
		<div className="bd"></div>
	  </div>
    )
  }
}

export default CommentList