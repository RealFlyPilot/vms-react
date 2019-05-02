import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'
import { WithFigma } from 'storybook-addon-figma'
import { GridOverlay } from '../../src/apps/AccelerationHQ/components/GridOverlay'
import { withInfo, addParameters } from '@storybook/addon-info'

import { VmsColorPallete } from '../../src/apps/AccelerationHQ/components/ColorPallete'
import { componentLibraryRoot } from '../roots'

storiesOf(componentLibraryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${componentLibraryRoot}/Colors`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)

storiesOf(`${componentLibraryRoot}/Colors/All`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('Full Pallete', () => <VmsColorPallete />)
  .add('Grey', () => <VmsColorPallete color='grey' />)
  .add('Blue', () => <VmsColorPallete color='blue' />)
  .add('Cyan', () => <VmsColorPallete color='cyan' />)
  .add('Green', () => <VmsColorPallete color='green' />)
  .add('Yellow', () => <VmsColorPallete color='yellow' />)
  .add('Orange', () => <VmsColorPallete color='orange' />)
  .add('Red', () => <VmsColorPallete color='red' />)
