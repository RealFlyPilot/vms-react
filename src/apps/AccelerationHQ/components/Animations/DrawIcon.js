import React, { Component } from 'react'
import SvgLines from 'react-mt-svg-lines'
import { PropTypes } from 'prop-types'

class DrawIcon extends Component {
	render() {
		const { children, duration, start } = this.props
		return (
			<SvgLines animate={start} duration={duration}>
				{children}
			</SvgLines>
		)
	}
}

DrawIcon.propTypes = {
	duration: PropTypes.number,
	Icon: PropTypes.element.isRequired
}

export { DrawIcon }
