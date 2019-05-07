import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'
import { WithFigma } from 'storybook-addon-figma'
import { withInfo, addParameters } from '@storybook/addon-info'
import { componentLibraryRoot } from '../roots'
import { CardStack } from '../../src/apps/AccelerationHQ/components/Animations/Card/CardStack'
import { ListReorder } from '../../src/apps/AccelerationHQ/components/Animations/List/ListReorder'
// import { DrawIcon } from '../../src/apps/AccelerationHQ/components/Animations/DrawIcon'
import { IconAnimationHandler } from '../../src/apps/AccelerationHQ/components/Animations/AnimationHandler'

import { VmsButton } from '../../src/apps/AccelerationHQ/components/VmsButton/index'

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
} from '../../src/apps/AccelerationHQ/components/Icons/index.js'

storiesOf(componentLibraryRoot, module).addDecorator(withKnobs).addDecorator(centered)
storiesOf(`${componentLibraryRoot}/Animations`, module)
	.addDecorator(centered)
	.addDecorator(withInfo)
	.add('Card Stack', () => <CardStack />, {
		info: ` ## Figma Link: [View](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=22%3A0) `
	})
	.add('List Reorder', () => <ListReorder />, {
		info: ` ## Figma Link: [View](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=22%3A0) `
	})
	.add('SVG Draw Checkmark on Click', () => <IconAnimationHandler ChildIcon={CheckMark} />, {
		info: ` ## Figma Link: [View](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=22%3A0) `
	})
	.add('SVG Draw SortArrow on Click', () => <IconAnimationHandler ChildIcon={SortArrow} />, {
		info: ` ## Figma Link: [View](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=22%3A0) `
	})
