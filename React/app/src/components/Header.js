import React, { Component } from 'react'
import PropTypes from 'prop-types'


  let count = 0;
class Header extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor () {
    super()
    this.state = { themeColor: '' }
  }

  componentWillMount () {
    this._updateThemeColor();
	const { store } = this.context
	this._updateThemeColor()
	store.subscribe(() => this._updateThemeColor())
  }
 
  // dispatch action 去改变颜色
    handleSwitchColor (color) {
      const { store } = this.context;
	  if(color===1){
		  count++;
	  }
      store.dispatch({
        type: 'CHANGE_COLOR',
        themeColor: 
		count%2===0?'#303643':'#563d7c'
      })
    }

  _updateThemeColor () {
    const { store } = this.context;
    const state = store.getState();
    this.setState({ themeColor: state.themeColor })
  }

  render () {
    return (
		<div className="changeColor" style={{ background: this.state.themeColor }}>
			<div>React留言板</div>
			<div className="switchs" onClick={this.handleSwitchColor.bind(this,1)}>Redux换肤</div>
		</div>
    )
  }
}

export default Header

