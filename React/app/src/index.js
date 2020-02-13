import React, {
	Component
} from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Input from './components/Input.js'
import List from './components/List.js'
import * as serviceWorker from './serviceWorker';

class Index extends Component {
	constructor (){
	    super()
	    this.state = {
	      comments: [
			  {username: '简嫃', content: '你所在之处，是我不得不思念的天涯海角。——《天涯海角》'},
		      {username: '简嫃', content: '若我看倦了风景，走累了路。你是否，愿意变成酒色的石头，让我把余生靠一靠。《胭脂盆地》'},
		      {username: '简嫃', content: '认识你越久，越觉得你是我人生行路中一处清喜的水泽。几次相忘于世，总在山穷水尽又悄然相见，算来即是一种不舍。'},
			]
	    }
	}
	
	componentWillMount () {//挂载前加载存储的数据
	    this._loadComments();
	}
	
	_loadComments(){
		const comments = localStorage.getItem('comments');
		if(comments){
			this.setState({comments:JSON.parse(comments)})
		}
	}
	
	 _saveComments(comments) {
	    localStorage.setItem('comments', JSON.stringify(comments))
	 }
	
	
	handleSubmitComment(e){
		if(!e) return;
		if(!e.username) return alert('请输入用户名');
		if(!e.content) return alert('请输入评论');
		const comments = this.state.comments
		comments.push(e);
		this.setState({
		      comments
		})
		this._saveComments(comments)
	}
	
	 
	 handleDeleteComment(index){
		 console.log(index)
		 const comments = this.state.comments;
		 comments.splice(index, 1)
		 this.setState({ comments })
		 this._saveComments(comments)
	 }
	
	render() {
		return ( 
		<div className = "index" >
			<Input  onSubmit={this.handleSubmitComment.bind(this)} />
			<div>
				 {this.state.comments.map((comment, i) => <List comment={comment} key={i} index={i}  onDeleteComment={this.handleDeleteComment.bind(this)}/>)}
			</div>
			</div>
		)
	}
}

ReactDOM.render( <
	Index / > ,
	document.getElementById('root')
);

/* ReactDOM.render(<App />, document.getElementById('root')); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
