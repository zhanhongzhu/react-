import React, {
	Component
} from 'react'

class CommentInput extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			content: ''
		}
	}

	handleUsernameChange(event) {
		this.setState({
			username: event.target.value
		})
	}

	handleContentChange(event) {
		this.setState({
			content: event.target.value
		})
	}

	handleSubmit() {
		if (this.props.onSubmit) {
			const {
				username,
				content
			} = this.state
			this.props.onSubmit({
				username:this.state.username,
				content:this.state.content,
				createdTime: +new Date()
			})
		}
		console.log(this.state)
		this.setState({
			content: ''
		})
	}

	componentWillMount() { //组件挂载前
		this._loadUsername()
	}

	componentDidMount() { //组件已经挂载
		this.textarea.focus()
	}
	
	_loadUsername(){
		const username = localStorage.getItem('username');
		if(username){
			this.setState({
				username
			})
		}
	}

	handleUsernameBlur(e) {
		//失去焦点会触发
		this._saveUserName(e.target.value);
	}


	//保存用户名
	_saveUserName(username) {
		localStorage.setItem('username', username)
	}

	_saveUserComments(comment) {
		localStorage.setItem('comment', comment)
	}

	render() {
		return ( <
			div className = "user-box" >
			<
			div className = "username-input" >
			<
			label > 用户名: < /label> <
			input type = "text"
			onBlur = {
				this.handleUsernameBlur.bind(this)
			}
			placeholder = "请输入用户名"
			value = {
				this.state.username
			}
			onChange = {
				this.handleUsernameChange.bind(this)
			}
			/> <
			/div>

			<
			div className = "comment-input" >
			<
			label > 评论: < /label> <
			textarea ref = {
				(textarea) => this.textarea = textarea
			}
			placeholder = "请输入评论"
			value = {
				this.state.content
			}
			onChange = {
				this.handleContentChange.bind(this)
			} > < /textarea> <
			/div>

			<
			div className = "publish" >
			<
			button onClick = {
				this.handleSubmit.bind(this)
			} > 发布 < /button></div >
			<
			/div>
		)
	}
}

export default CommentInput
