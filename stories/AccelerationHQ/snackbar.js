import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'
import { WithFigma } from 'storybook-addon-figma'
import { withInfo, addParameters } from '@storybook/addon-info'
import { componentLibraryRoot } from '../roots'
import VmsSnackBar from '../../src/apps/AccelerationHQ/components/VmsSnackBar/index.js'

storiesOf(componentLibraryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${componentLibraryRoot}/SnackBar`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)

  .add(
    'Demo: Message Only',
    () => (
      <WithFigma
        url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=22%3A0'}
      >
        <VmsSnackBar />
      </WithFigma>
    ),
    {
      info: ` ## Figma Link: [View](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=22%3A0) `
    }
  )
  .add(
    'Demo: Message CTA',
    () => (
      <WithFigma
        url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=22%3A0'}
      >
        <VmsSnackBar variant='message-cta' />
      </WithFigma>
    ),
    {
      info: ` ## Figma Link: [View](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=22%3A0) `
    }
  )
  .add(
    'Demo: Message CTA Close',
    () => (
      <WithFigma
        url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=22%3A0'}
      >
        <VmsSnackBar variant='message-cta-close' />
      </WithFigma>
    ),
    {
      info: ` ## Figma Link: [View](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=22%3A0) `
    }
  )
