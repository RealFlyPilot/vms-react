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
  .add('All', () => <VmsColorPallete />)
  .add('By Color: Red', () => <VmsColorPallete color='red' />)
  .add('All With Grid Background', () => (
    <GridOverlay>
      <VmsColorPallete />
    </GridOverlay>
  ))
  .add('With Figma', () => (
    <WithFigma
      url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A0'}
    >
      <VmsColorPallete />
    </WithFigma>
  ))
