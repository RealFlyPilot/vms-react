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
import { componentLibraryRoot, formElementRoot } from '../roots'

storiesOf(componentLibraryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${componentLibraryRoot}`, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${formElementRoot}/Inputs`, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${formElementRoot}/Inputs/Single`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)

  .add('Default Single Line', () => <VmsInput type='default' />)
  .add('Single Line Error', () => <VmsInput error />)
  .add('Single Line Inactive', () => <VmsInput inactive />)
  .add('Single Line Editable', () => <VmsInput editable />)
  .add('Single Line Uneditable', () => <VmsInput editable={false} />)

storiesOf(`${componentLibraryRoot}/Select Elements`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)

storiesOf(`${componentLibraryRoot}/Select Elements/Calendar`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .addDecorator(centered)
