import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'
import { WithFigma } from 'storybook-addon-figma'
import { GridOverlay } from '../../src/apps/AccelerationHQ/components/GridOverlay'
import { withInfo, addParameters } from '@storybook/addon-info'
import VmsInput from '../../src/apps/AccelerationHQ/components/VmsInput'
import VmsTable from '../../src/apps/AccelerationHQ/components/VmsTable'

import { VmsColorPallete } from '../../src/apps/AccelerationHQ/components/ColorPallete'

storiesOf('VMS Form Field Library', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf('VMS Form Field Library/Colors/Color Pallete', module)
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

storiesOf('VMS Form Field Library/VmsInputs', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf('VMS Form Field Library/VmsInputs/Single', module)
  .addDecorator(centered)
  .addDecorator(withInfo)

  .add('Default Single Line', () => <VmsInput type='default' />)
  .add('Single Line Error', () => <VmsInput error />)
  .add('Single Line Inactive', () => <VmsInput inactive />)
  .add('Single Line Editable', () => <VmsInput editable />)
  .add('Single Line Uneditable', () => <VmsInput editable={false} />)

storiesOf('VMS Form Field Library/Tables', module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('Default Table', () => <VmsTable />)
