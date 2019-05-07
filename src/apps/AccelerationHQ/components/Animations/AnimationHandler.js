import React, { Component } from 'react'

import { DrawIcon } from './DrawIcon'
import { VmsButton } from '../VmsButton'
import {
	Dot,
	Edit,
	Error,
	FPO,
	Menu,
	More,
	Pending,
	Schedule,
	Share,
	CheckBox,
	DropdownArrow,
	Heart,
	CheckMark,
	RatingStar,
	SortArrow,
	Grip,
	GripTexture,
	CaretDown
} from '../Icons/index.js'

export class IconAnimationHandler extends Component {
	state = {
		startAnimation: false
	}
	handleClick = () => {
		this.setState({
			startAnimation: true
		})
	}
	render() {
		const { startAnimation } = this.state
		const { ChildIcon } = this.props
		const draw = (
			<DrawIcon start={true} duration={500}>
				<ChildIcon />
			</DrawIcon>
		)
		return (
			<div>
				<div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
					{startAnimation ? draw : null}
				</div>

				<VmsButton buttonType="primary" onClick={this.handleClick}>
					Show Icon Animation
				</VmsButton>
			</div>
		)
	}
}
