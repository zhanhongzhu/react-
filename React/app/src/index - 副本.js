import React, {
	Component
} from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Input from './components/Input.js'
import List from './components/List.js'

import * as serviceWorker from './serviceWorker';


class Header extends Component {
	  static defaultProps = {
	    isZan: '取消',
	    noZan: '点赞'
	  }
	  
	constructor(){
		super();
		this.state = {
			isClick:false,
			count:0,
		}
	}
	clickHeader(pre) {
		this.setState({
			isClick:!this.state.isClick,
			count:this.state.count+1,
		})
		if (this.props.onClick) {
		      this.props.onClick()
		}
	}
	render() {
		const isZan = this.props.isZan;
		const noZan = this.props.noZan;
		return ( 
		<div className={this.state.isClick?'header':'header1'}>
			<div></div>
			<button onClick={this.clickHeader.bind(this)}>{this.state.isClick ? isZan:noZan}{this.state.count}</button>
		</div>
		)
	}
}



const users = [
	{name:'aaa',age:18},
	{name:'bbb',age:11},
	{name:'ccc',age:18},
	{name:'ddd',age:48},
	{name:'eee',age:19}
];
class Main extends Component {
	render() {
		const { user } = this.props;
		return(
		<div className = "main">
				<div>
					<div>{user.name}</div>
					<div>{user.age}</div>
				</div>
		</div>
		)
	}
}

class Footer extends Component {
	render() {
		return (
		<div className = "footer"></div>
		)
	}
}

class Index extends Component {
	
	render() {
		return ( 
		<div className = "index" >
			<Header  isZan='已赞' noZan='赞' onClick={()=>{
				console.log('21212122121221')
			}}/>
			
			<div>
				 {users.map((user,i) => <Main key={i} user={user} />)}
			</div>
			
			<Footer / >
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
