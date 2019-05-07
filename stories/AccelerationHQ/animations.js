import React from 'react'
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
