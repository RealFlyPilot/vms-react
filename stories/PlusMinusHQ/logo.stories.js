import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'
import { LogoAnimation } from '../../src/apps/PlusMinusHQ/components/LogoAnimation'
import { Header } from '../../src/apps/PlusMinusHQ/components/Header/Header'

storiesOf('PlusMinus|HQ', module)
	.addDecorator(withKnobs)
	.addDecorator(centered)
	.add('Header', () => <Header user={{ username: 'Liam', email: 'poop', phone_number: 'more poop' }} />, {
		info: `
            #### Header

          `
	})
	.add('Stroke Animation w/White Background', () => <LogoAnimation background="white" type="stroke" />)
	// .add('Stroke Animation on Fill w/White Background', () => <LogoAnimation background="white" />)
	.add('Stroke Animation on Fill w/Black Background', () => <LogoAnimation background="black" type="stroke" />)
