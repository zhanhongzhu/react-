import React, { Component } from 'react'
import PropTypes from 'prop-types'



class CommentList extends Component {
	static propTypes = {
	   comment: PropTypes.object
	}
	
	static contextTypes = {
	  store: PropTypes.object
	}
	
	constructor () {
	    super()
	    this.state = { 
			timeString: '',
			themeColor: ''
		}	
	}
	
	componentWillMount () {
	    this._updateTimeString();
		    this._timer = setInterval(
		      this._updateTimeString.bind(this),
		      5000
		)
		this._updateThemeColor();
		const { store } = this.context
		this._updateThemeColor()
		store.subscribe(() => this._updateThemeColor())
	 }
	 
	 _updateThemeColor () {
	   const { store } = this.context
	   const state = store.getState()
	   this.setState({ themeColor: state.themeColor })
	 }
	 
	 
	  componentWillUnmount () {
	     clearInterval(this._timer)
	   }
	 
	 _updateTimeString(){
		 const comment = this.props.comment;
		 const duration = (+Date.now() - comment.createdTime) / 1000;
		 this.setState({
			 timeString: 
			 duration>86400?`${Math.round(duration / 86400)} 天前`
			 :duration>3600?`${Math.round(duration / 3600)} 小时前`
			 :duration>60? `${Math.round(duration / 60)} 分钟前`
			 :duration>0?`${Math.round(Math.max(duration, 1))} 秒前`
			 :'1年前'
		 })
		 
	 }
	
	 handleDeleteComment(index){
		 console.log(this.props.index)
		 if (this.props.onDeleteComment) {
		       this.props.onDeleteComment(this.props.index)
		 }
	}
	
	  _getProcessedContent (content) {
	    return content
	      .replace(/&/g, "&amp;")
	           .replace(/</g, "&lt;")
	           .replace(/>/g, "&gt;")
	           .replace(/"/g, "&quot;")
	           .replace(/'/g, "&#039;")
	           .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
	  }
	
	
  render() {
    return (
	<div className="comment-box">
      <div className="comment-con">
		<div className="userName">{this.props.comment.username}:</div>
		<div className="comment" style={{ color: this.state.themeColor }} dangerouslySetInnerHTML={{
  __html: this._getProcessedContent(this.props.comment.content)
}}></div>
	  </div>
	  <div className="comment-time"><div className="comment-delete" onClick={this.handleDeleteComment.bind(this)}>删除</div>{this.state.timeString}</div>
	  <div className="bd"></div>
	  </div>
    )
  }
}

export default CommentList