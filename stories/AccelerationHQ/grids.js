import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'
import { WithFigma } from 'storybook-addon-figma'
import { GridOverlay, GridHorizontal } from '../../src/apps/AccelerationHQ/components/GridOverlay'
import { withInfo, addParameters } from '@storybook/addon-info'

import { buttonRoot, componentLibraryRoot } from '../roots'
import { allWorkerData, allCandidateData } from '../data'

storiesOf(componentLibraryRoot, module).addDecorator(withKnobs).addDecorator(centered)

storiesOf(`${componentLibraryRoot}/Grids/`, module)
	.addDecorator(centered)
	.addDecorator(withInfo)
	.add('Vertical', () => (
		<WithFigma
			url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=339%3A3'}
		>
			<GridOverlay />
		</WithFigma>
	))
	.add('Horizontal', () => (
		<WithFigma
			url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=339%3A3'}
		>
			<GridHorizontal />
		</WithFigma>
	))
	.add('Together', () => (
		<WithFigma
			url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=339%3A3'}
		>
			<GridOverlay>
				<GridHorizontal />
			</GridOverlay>
		</WithFigma>
	))
