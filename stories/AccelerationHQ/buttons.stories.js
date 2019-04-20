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

storiesOf('VMS Form Field Library', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf('VMS Form Field Library/Buttons', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf('VMS Form Field Library/Buttons/Primary', module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add(
    'Default',
    () => (
      <GridOverlay>
        <VmsButton buttonType={`primary`}>Primary Button</VmsButton>
      </GridOverlay>
    ),
    {
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
    }
  )
  .add('Primary Button With Figma', () => (
    <WithFigma
      url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=14%3A73'}
    >
      <VmsButton buttonType={`primary`}>Primary Button</VmsButton>
    </WithFigma>
  ))

storiesOf('VMS Form Field Library/Buttons/Secondary', module)
  .addParameters({
    backgrounds: [{ name: 'twitter', value: '#00aced', default: true }, { name: 'facebook', value: '#3b5998' }]
  })
  .addDecorator(centered)
  .add('Default', () => <VmsButton buttonType={'secondary'}>Secondary Button</VmsButton>)
storiesOf('VMS Form Field Library/Buttons/Secondary Alt', module)
  .addDecorator(centered)
  .add('Default', () => <VmsButton buttonType={'secondary_alt'}>Secondary Alt Button</VmsButton>)
storiesOf('VMS Form Field Library/Buttons/Tertiary', module)
  .addDecorator(centered)
  .add('Default', () => <VmsButton buttonType={'tertiary'}>Tertiary Button</VmsButton>)

  .add('Link', () => <VmsButton buttonType={'link'}>Link</VmsButton>)
  .add('Pill', () => <VmsButton buttonType={'pill'}>Link</VmsButton>)
