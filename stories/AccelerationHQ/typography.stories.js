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
import { Subtitle } from '../../src/apps/AccelerationHQ/components/Subtitle/index.js'

import '../../src/apps/AccelerationHQ/App.scss'

storiesOf(componentLibraryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${componentLibraryRoot}/Typography/`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)

storiesOf(`${componentLibraryRoot}/Typography/All`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('All', () => (
    <WithFigma
      url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=2%3A0'}
    >
      <div
        style={{
          display: 'flex',
          width: '100vw',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}
      >
        <h1
          className='headline h1 book'
          style={{ position: 'absolute', top: 0, left: 0, width: '100vw', textAlign: 'center', color: '#8A8A8A' }}
        >
          Acceleration Typography Library
        </h1>
        <div style={{ marginTop: '100px' }}>
          <Headline content='Headline 1' type='h1' />
          <Headline content='Headline 2' type='h2' />
          <Headline content='Headline 3' type='h3' />
          <Headline content='Headline 4' type='h4' />
          <Headline content='Headline 5' type='h5' />
          <Headline content='Headline 6' type='h6' />
          <Subtitle content='Subtitle 1 - heavy' type='st-1' weight='heavy' />
          <Subtitle content='Subtitle 1 - medium' type='st-1' weight='medium' />
          <Subtitle content='Subtitle 1 - book' type='st-1' weight='book' />
          <Subtitle content='Subtitle 2 - heavy' type='st-2' weight='heavy' />
          <Subtitle content='Subtitle 2 - medium' type='st-2' weight='medium' />
          <Subtitle content='Subtitle 2 - book' type='st-2' weight='book' />
        </div>
        <div>
          <p className='body-text text-1 heavy'>Body Text 1 - Heavy</p>
          <p className='body-text text-1 medium'>Body Text 1 - medium</p>
          <p className='body-text text-1 book'>Body Text 1 - book</p>
          <p className='body-text text-2 heavy'> Body Text 2 - Heavy</p>
          <p className='body-text text-2 medium'> Body Text 2 - medium</p>
          <p className='body-text text-2 book'> Body Text 2 - book</p>
          <p className='btn-text heavy'>Button Text - Heavy</p>
          <p className='btn-text medium'>Button Text - Medium</p>
          <p className='btn-text book'>Button Text - Book</p>
          <p className='caption-text heavy'>Caption Text - heavy</p>
          <p className='caption-text medium'>Caption Text - medium</p>
          <p className='caption-text book'>Caption Text - book</p>
          <p className='overline-text heavy'>Overline Text - heavy</p>
          <p className='overline-text medium'>Overline Text - medium</p>
          <p className='overline-text book'>Overline Text - book</p>
        </div>
      </div>
    </WithFigma>
  ))

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
        - font-family: Avenir;
        - font-size: 48px;
        - line-height: 54px;

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
         - font-family: Avenir;
        - font-size: 36px;
        - line-height: 45px;

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
           - font-family: Avenir;
        - font-size: 24px;
        - line-height: 36px;

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
           - font-family: Avenir;
        - font-size: 18px;
        - line-height: 27px;

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
           - font-family: Avenir;
        - font-size: 15px;
        - line-height: 18px;

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
           - font-family: Avenir;
        - font-size: 12px;
        - line-height: 18px;

      ### [Figma](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=2%3A0'})


      `
    }
  )

storiesOf(`${componentLibraryRoot}/Typography/Subtitles`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add(
    'Subtitle 1',
    () => (
      <WithFigma
        url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A0'}
      >
        <Subtitle content='Subtitle 1 - heavy' type='st-1' weight='heavy' />
        <Subtitle content='Subtitle 1 - medium' type='st-1' weight='medium' />
        <Subtitle content='Subtitle 1 - book' type='st-1' weight='book' />
      </WithFigma>
    ),
    {
      info: `
      ## Details
           - font-family: Avenir;
        - font-size: 15px;
        - line-height: 18px;

      ### [Figma](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=2%3A0'})
      
    
      `
    }
  )
  .add(
    'Subtitle 2',
    () => (
      <WithFigma
        url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A0'}
      >
        <Subtitle content='Subtitle 2 - heavy' type='st-2' weight='heavy' />
        <Subtitle content='Subtitle 2 - medium' type='st-2' weight='medium' />
        <Subtitle content='Subtitle 2 - book' type='st-2' weight='book' />
      </WithFigma>
    ),
    {
      info: `
      ## Details
           - font-family: Avenir;
        - font-size: 12px;
        - line-height: 18px;

      ### [Figma](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=2%3A0'})
      `
    }
  )

storiesOf(`${componentLibraryRoot}/Typography/Body Text`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('Body 1', () => (
    <WithFigma
      url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A0'}
    >
      <p className='body-text text-1 heavy'>Body Text 1 - Heavy</p>
      <p className='body-text text-1 medium'>Body Text 1 - medium</p>
      <p className='body-text text-1 book'>Body Text 1 - book</p>
    </WithFigma>
  ))
  .add('Body 2', () => (
    <WithFigma
      url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A0'}
    >
      <p className='body-text text-2 heavy'> Body Text 2 - Heavy</p>
      <p className='body-text text-2 medium'> Body Text 2 - medium</p>
      <p className='body-text text-2 book'> Body Text 2 - book</p>
    </WithFigma>
  ))

storiesOf(`${componentLibraryRoot}/Typography/Button Text`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('All', () => (
    <WithFigma
      url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A0'}
    >
      <p className='btn-text heavy'>Button Text - Heavy</p>
      <p className='btn-text medium'>Button Text - Medium</p>
      <p className='btn-text book'>Button Text - Book</p>
    </WithFigma>
  ))

storiesOf(`${componentLibraryRoot}/Typography/Caption Text`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('All', () => (
    <WithFigma
      url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A0'}
    >
      <p className='caption-text heavy'>Caption Text - heavy</p>
      <p className='caption-text medium'>Caption Text - medium</p>
      <p className='caption-text book'>Caption Text - book</p>
    </WithFigma>
  ))

storiesOf(`${componentLibraryRoot}/Typography/Overline Text`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('All', () => (
    <WithFigma
      url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A0'}
    >
      <p className='overline-text heavy'>Overline Text - heavy</p>
      <p className='overline-text medium'>Overline Text - medium</p>
      <p className='overline-text book'>Overline Text - book</p>
    </WithFigma>
  ))
