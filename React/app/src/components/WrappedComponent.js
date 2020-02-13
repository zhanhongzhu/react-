import React, {
	Component
} from 'react'

class WrapperComponent extends Component {
	constructor() {
		super()
		this.state = {
			data: '121'
		}
	}
	componentWillMount() {
		this.setState({
			data:'121212112'
		})
	}

	render() {
		return ( 
		<div> {this.state.data} 32323</div>
		)
	}
}

export default WrapperComponent
