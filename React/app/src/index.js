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
	
	
	handleSubmitComment(e){
		this.state.comments.push(e);
		    this.setState({
		      comments: this.state.comments
		})
	}
	
	render() {
/* 		const comments = [
		      {username: 'Jerry21221', content: 'Hello1`2`'},
		      {username: 'Tom2`2`12y', content: 'Wor21`2ld'},
		      {username: 'Lucy12`', content: 'Goo2`12`d'}
		]; */
		return ( 
		<div className = "index" >
			<Input  onSubmit={this.handleSubmitComment.bind(this)} />
			<div>
				 {this.state.comments.map((comment, i) => <List comment={comment} key={i} />)}
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
