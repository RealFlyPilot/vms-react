import React from 'react'
import './index.scss'
import { dynamicAttributes } from '../utils'
import { PropTypes } from 'prop-types'

const VmsButton = ({ cssClass, Icon, buttonType, disabled, pill, onClick, onHover, ...props }) => {
	const type = dynamicAttributes(buttonType, 'true')
	const dis = dynamicAttributes('disabled', disabled)
	const iconColor = disabled ? '#C5C5C5' : buttonType === 'primary' ? '#fff' : '#607D8B'
	return (
		<button
			{...type}
			{...dis}
			className={`${buttonType} ${Icon ? 'with-icon' : ''} ${cssClass || ''}`}
			onClick={onClick}
		>
			{Icon ? <Icon color={iconColor} /> : null} {buttonType === 'pill' ? (
				<span className="plus">+</span>
			) : null}{' '}
			{Icon ? <span style={{ marginLeft: '6px' }}>{props.children}</span> : props.children}
		</button>
	)
}

VmsButton.propTypes = {
	cssClass: PropTypes.string,
	disabled: PropTypes.bool,
	pill: PropTypes.bool,
	buttonType: PropTypes.string.isRequired,
	Icon: PropTypes.element,
	onClick: PropTypes.func,
	onHover: PropTypes.func
}

export { VmsButton }
