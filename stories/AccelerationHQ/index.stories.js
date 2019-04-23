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
import { buttonRoot, componentLibraryRoot, formFieldLibraryRoot } from '../roots'
import TableHandler from '../../src/apps/AccelerationHQ/components/VmsTable/TableHandler'

const dataSet1 = ['Mike Lovascio', 159, 6.0, 24, 4.0, 0, 0, 0, 0, 0, 0, 0, 0]
const dataSet2 = ['Daddy Greco', 237, 9.0, 37, 4.3, 0, 0, 0, 0, 0, 0, 0, 0]
const dataSet3 = ['P Steezy', 262, 16.0, 24, 6.0, 0, 0, 0, 0, 0, 0, 0, 0]
const dataSet4 = ['Lee Bag', 305, 3.7, 67, 4.3, 0, 0, 0, 0, 0, 0, 0, 0]
const dataSet5 = ['J Capitan', 356, 16.0, 49, 3.9, 0, 0, 0, 0, 0, 0, 0, 0]

const allWorkerData = [dataSet1, dataSet2, dataSet3, dataSet4, dataSet5]

storiesOf(componentLibraryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${formFieldLibraryRoot}`, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${formFieldLibraryRoot}/Vms Colors/Color Pallete`, module)
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

storiesOf(`${formFieldLibraryRoot}/Vms Input Fields`, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${formFieldLibraryRoot}/Vms Input Fields/Single`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)

  .add('Default Single Line', () => <VmsInput type='default' />)
  .add('Single Line Error', () => <VmsInput error />)
  .add('Single Line Inactive', () => <VmsInput inactive />)
  .add('Single Line Editable', () => <VmsInput editable />)
  .add('Single Line Uneditable', () => <VmsInput editable={false} />)

storiesOf(`${formFieldLibraryRoot}/Vms Tables`, module)

storiesOf(`${formFieldLibraryRoot}/Vms Tables/Single`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('Worker Table', () => <TableHandler tableType='worker' data={allWorkerData} />)

storiesOf(`${formFieldLibraryRoot}/VMS Select Fields`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)

storiesOf(`${formFieldLibraryRoot}/VMS Select Fields/Calendar Select`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .addDecorator(centered)
