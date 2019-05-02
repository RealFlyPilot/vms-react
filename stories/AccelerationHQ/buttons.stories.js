import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'
import { WithFigma } from 'storybook-addon-figma'
import { VmsButton } from '../../src/apps/AccelerationHQ/components/VmsButton'
import { GridOverlay } from '../../src/apps/AccelerationHQ/components/GridOverlay'
import { withInfo, addParameters } from '@storybook/addon-info'
import { buttonRoot, componentLibraryRoot } from '../roots'
import { FPO } from '../../src/apps/AccelerationHQ/components/Icons/index.js'

storiesOf(componentLibraryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${buttonRoot}`, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${buttonRoot}/Primary`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('Default', () => <VmsButton buttonType={`primary`}>Call To Action</VmsButton>, {
    info: `
            #### Primary Button CSS

            - background: #607D8B; Blue/607D8B
            - border- radius: 3px;
            - font-family: Avenir;
            - font-size: 12px;
            - line-height: 18px;
            - text-align: center;
            - color: #FFFFFF;
            - box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.18), 0px 0px 1px rgba(0, 0, 0, 0.27);
          `
  })
  .add('Disabled', () => (
    <VmsButton buttonType={`primary`} disabled>
      Call To Action
    </VmsButton>
  ))
  .add('With Grid', () => (
    <GridOverlay>
      <VmsButton buttonType={`primary`}>Call To Action</VmsButton>
    </GridOverlay>
  ))
  .add('w/Icon', () => (
    <VmsButton buttonType={`primary`} Icon={FPO}>
      Call To Action
    </VmsButton>
  ))
  .add('w/Icon Inactive', () => (
    <VmsButton buttonType={`primary`} Icon={FPO} disabled>
      Call To Action
    </VmsButton>
  ))
  .add('w/Icon + Notify', () => (
    <VmsButton buttonType={`primary`} cssClass='notify' Icon={FPO}>
      Call To Action
    </VmsButton>
  ))
  .add(
    'W/ Figma',
    () => (
      <WithFigma
        url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A1'}
      >
        <VmsButton buttonType={`primary`}>Call To Action</VmsButton>
      </WithFigma>
    ),
    {
      info: `
            ## Figma Link: [View](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A1)
          `
    }
  )

storiesOf(`${buttonRoot}/Secondary`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('Default', () => <VmsButton buttonType={'secondary'}>Secondary Button</VmsButton>)
  .add('Disabled', () => (
    <VmsButton buttonType={'secondary'} disabled>
      Call To Action
    </VmsButton>
  ))
  .add('w/Icon', () => (
    <VmsButton buttonType={`secondary`} Icon={FPO}>
      Call To Action
    </VmsButton>
  ))
  .add('w/Icon Inactive', () => (
    <VmsButton buttonType={`secondary`} Icon={FPO} disabled>
      Call To Action
    </VmsButton>
  ))
  .add('w/Icon + Notify', () => (
    <VmsButton buttonType={`secondary`} cssClass='notify' Icon={FPO}>
      Call To Action
    </VmsButton>
  ))
  .add(
    'W/ Figma',
    () => (
      <WithFigma
        url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A1'}
      >
        <VmsButton buttonType={'secondary'}>Call To Action</VmsButton>
      </WithFigma>
    ),
    {
      info: ` ## Figma Link: [View](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A1) `
    }
  )

storiesOf(`${buttonRoot}/Tertiary`, module)
  .addDecorator(centered)
  .add('Default', () => <VmsButton buttonType={'tertiary'}>Call To Action</VmsButton>)
  .add('Disabled', () => (
    <VmsButton buttonType={'tertiary'} disabled>
      Call To Action
    </VmsButton>
  ))
  .add('w/Icon', () => (
    <VmsButton buttonType={`tertiary`} Icon={FPO}>
      Call To Action
    </VmsButton>
  ))
  .add('w/Icon Inactive', () => (
    <VmsButton buttonType={`tertiary`} Icon={FPO} disabled>
      Call To Action
    </VmsButton>
  ))
  .add('w/Icon + Notify', () => (
    <VmsButton buttonType={`tertiary`} cssClass='notify' Icon={FPO}>
      Call To Action
    </VmsButton>
  ))

storiesOf(`${buttonRoot}/Link`, module)
  .addDecorator(centered)
  .add('Default', () => <VmsButton buttonType={'link'}>Call to Action</VmsButton>)

storiesOf(`${buttonRoot}/Pill`, module)
  .addDecorator(centered)
  .add('Default', () => <VmsButton buttonType={'pill'}>Call To Action</VmsButton>)
  .add('Primary', () => (
    <VmsButton buttonType={'pill'} cssClass='primary'>
      Call To Action
    </VmsButton>
  ))
  .add('Secondary', () => (
    <VmsButton buttonType={'pill'} cssClass='secondary'>
      Call To Action
    </VmsButton>
  ))
  .add('Tertiary', () => (
    <VmsButton buttonType={'pill'} cssClass='tertiary'>
      Call To Action
    </VmsButton>
  ))
  .add('Disabled', () => (
    <VmsButton buttonType={'pill'} disabled>
      Call To Action
    </VmsButton>
  ))
