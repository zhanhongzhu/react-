import React, {
	Component
} from 'react'
import WrappedComponent from './WrappedComponent.js'
export default (WrappedComponent) => {
	class NewComponent extends Component {
		constructor() {
			super()
			this.state = {
				data:'12121'
			}
		}
		render() {
			return (
				<div>
				/* <WrappedComponent/> */
				<h1>高阶组件1</h1>
				</div>
			
			)
		}
	}
	return NewComponent
}
