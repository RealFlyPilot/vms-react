import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'
import { WithFigma } from 'storybook-addon-figma'
import { withInfo } from '@storybook/addon-info'
import { componentLibraryRoot } from '../roots'
import { Headline } from '../../src/apps/AccelerationHQ/components/Headline/index.js'

storiesOf(componentLibraryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${componentLibraryRoot}/Typography/`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)

storiesOf(`${componentLibraryRoot}/Typography/Headlines`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('All', () => (
    <WithFigma
      url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=2%3A0'}
    >
      <div>
        <Headline content='Headline 1' type='h1' />
        <Headline content='Headline 2' type='h2' />
        <Headline content='Headline 3' type='h3' />
        <Headline content='Headline 4' type='h4' />
        <Headline content='Headline 5' type='h5' />
        <Headline content='Headline 6' type='h6' />
      </div>
    </WithFigma>
  ))
  .add(
    'Headline 1',
    () => (
      <WithFigma
        url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=2%3A0'}
      >
        <Headline content='Headline 1 - heavy' type='h1' weight='heavy' />
        <Headline content='Headline 1 - medium' type='h1' weight='medium' />
        <Headline content='Headline 1 - book' type='h1' weight='book' />
      </WithFigma>
    ),
    {
      info: `
      ## Details
        - 

      ### [Figma](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=2%3A0'})


      `
    }
  )

  .add(
    'Headline 2',
    () => (
      <WithFigma
        url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=2%3A0'}
      >
        <Headline content='Headline 2 - heavy' type='h2' weight='heavy' />
        <Headline content='Headline 2 - medium' type='h2' weight='medium' />
        <Headline content='Headline 2 - book' type='h2' weight='book' />
      </WithFigma>
    ),
    {
      info: `
      ## Details
        - 

      ### [Figma](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=2%3A0'})


      `
    }
  )

  .add(
    'Headline 3',
    () => (
      <WithFigma
        url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=2%3A0'}
      >
        <Headline content='Headline 3 - heavy' type='h3' weight='heavy' />
        <Headline content='Headline 3 - medium' type='h3' weight='medium' />
        <Headline content='Headline 3 - book' type='h3' weight='book' />
      </WithFigma>
    ),
    {
      info: `
      ## Details
        - 

      ### [Figma](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=2%3A0'})


      `
    }
  )

  .add(
    'Headline 4',
    () => (
      <WithFigma
        url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=2%3A0'}
      >
        <Headline content='Headline 4 - heavy' type='h4' weight='heavy' />
        <Headline content='Headline 4 - medium' type='h4' weight='medium' />
        <Headline content='Headline 4 - book' type='h4' weight='book' />
      </WithFigma>
    ),
    {
      info: `
      ## Details
        - 

      ### [Figma](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=2%3A0'})


      `
    }
  )

  .add(
    'Headline 5',
    () => (
      <WithFigma
        url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=2%3A0'}
      >
        <Headline content='Headline 5 - heavy' type='h5' weight='heavy' />
        <Headline content='Headline 5 - medium' type='h5' weight='medium' />
        <Headline content='Headline 5 - book' type='h5' weight='book' />
      </WithFigma>
    ),
    {
      info: `
      ## Details
        - 

      ### [Figma](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=2%3A0'})


      `
    }
  )

  .add(
    'Headline 6',
    () => (
      <WithFigma
        url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=2%3A0'}
      >
        <Headline content='Headline 6 - heavy' type='h6' weight='heavy' />
        <Headline content='Headline 6 - medium' type='h6' weight='medium' />
        <Headline content='Headline 6 - book' type='h6' weight='book' />
      </WithFigma>
    ),
    {
      info: `
      ## Details
        - 

      ### [Figma](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=2%3A0'})


      `
    }
  )

storiesOf(`${componentLibraryRoot}/Typography/Subtitles`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('Subtitle 1', () => (
    <WithFigma
      url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A0'}
    >
      <h6 className='subtitle-one'>Subtitle 1</h6>
    </WithFigma>
  ))
  .add('Subtitle 2', () => (
    <WithFigma
      url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A0'}
    >
      <h6 className='subtitle-two'>Subtitle 2</h6>
    </WithFigma>
  ))

storiesOf(`${componentLibraryRoot}/Typography/Button Text`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('Button Text', () => (
    <WithFigma
      url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A0'}
    >
      <h6 className='subtitle-one'>Button Text</h6>
    </WithFigma>
  ))

storiesOf(`${componentLibraryRoot}/Typography/Caption Text`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('Caption Text', () => (
    <WithFigma
      url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A0'}
    >
      <p className='caption'>Caption Text</p>
    </WithFigma>
  ))

storiesOf(`${componentLibraryRoot}/Typography/Overline Text`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('Overline Text', () => (
    <WithFigma
      url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A0'}
    >
      <p className='overline'>Overline Text</p>
    </WithFigma>
  ))
