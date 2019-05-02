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

storiesOf(componentLibraryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${buttonRoot}`, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${buttonRoot}/Primary`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('Primary Button', () => <VmsButton buttonType={`primary`}>Primary Button</VmsButton>, {
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
  .add('w/Icon', () => (
    <VmsButton buttonType={`primary`} disabled>
      Primary Button
    </VmsButton>
  ))
  .add('Disabled', () => (
    <VmsButton buttonType={`primary`} disabled>
      Primary Button
    </VmsButton>
  ))
  .add('With Grid', () => (
    <GridOverlay>
      <VmsButton buttonType={`primary`}>Primary Button</VmsButton>
    </GridOverlay>
  ))
  .add(
    'Primary Button With Figma',
    () => (
      <WithFigma
        url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=14%3A73'}
      >
        <VmsButton buttonType={`primary`}>Primary Button</VmsButton>
      </WithFigma>
    ),
    {
      info: `
            ## Figma Link: [View](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=14%3A73)
          `
    }
  )

storiesOf(`${buttonRoot}/Secondary`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('Default', () => <VmsButton buttonType={'secondary'}>Secondary Button</VmsButton>)
  .add('Disabled', () => (
    <VmsButton buttonType={'secondary'} disabled>
      Secondary Button
    </VmsButton>
  ))
  .add(
    'Secondary Button With Figma',
    () => (
      <WithFigma
        url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=29%3A42'}
      >
        <VmsButton buttonType={'secondary'}>Secondary Button</VmsButton>
      </WithFigma>
    ),
    {
      info: ` ## Figma Link: [View](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=29%3A42) `
    }
  )

storiesOf(`${buttonRoot}/Tertiary`, module)
  .addDecorator(centered)
  .add('Default', () => <VmsButton buttonType={'tertiary'}>Tertiary Button</VmsButton>)
  .add('Disabled', () => (
    <VmsButton buttonType={'tertiary'} disabled>
      Tertiary Button
    </VmsButton>
  ))

storiesOf(`${buttonRoot}/Link`, module)
  .addDecorator(centered)
  .add('Default', () => <VmsButton buttonType={'link'}>Call to Action</VmsButton>)

storiesOf(`${buttonRoot}/Pill`, module)
  .addDecorator(centered)
  .add('Default', () => <VmsButton buttonType={'pill'}>Pill</VmsButton>)
