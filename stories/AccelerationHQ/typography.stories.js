import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'
import { WithFigma } from 'storybook-addon-figma'
import { withInfo } from '@storybook/addon-info'
import { componentLibraryRoot } from '../roots'

storiesOf(componentLibraryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${componentLibraryRoot}/Typography/`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)

storiesOf(`${componentLibraryRoot}/Typography/Headline`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('Headline 1', () => <h1>Headline 1</h1>)
  .add('Headline 1 w/ Figma', () => (
    <WithFigma
      url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A0'}
    >
      <h1>Headline 1</h1>
    </WithFigma>
  ))

  .add('Headline 2', () => <h2>Headline 2</h2>)
  .add('Headline 2 w/ Figma', () => (
    <WithFigma
      url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A0'}
    >
      <h2>Headline 2</h2>
    </WithFigma>
  ))

  .add('Headline 3', () => <h3>Headline 3</h3>)
  .add('Headline 3 w/ Figma', () => (
    <WithFigma
      url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A0'}
    >
      <h3>Headline 3</h3>
    </WithFigma>
  ))

  .add('Headline 4', () => <h4>Headline 4</h4>)
  .add('Headline 4 w/ Figma', () => (
    <WithFigma
      url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A0'}
    >
      <h4>Headline 4</h4>
    </WithFigma>
  ))

  .add('Headline 5', () => <h5>Headline 5</h5>)
  .add('Headline 5 w/ Figma', () => (
    <WithFigma
      url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A0'}
    >
      <h5>Headline 5</h5>
    </WithFigma>
  ))

  .add('Headline 6', () => <h6>Headline 6</h6>)
  .add('Headline 6 w/ Figma', () => (
    <WithFigma
      url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A0'}
    >
      <h6>Headline 6</h6>
    </WithFigma>
  ))
