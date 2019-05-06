import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'

import {
  DropShadowUpFigmaTemplate,
  DropShadowInnerFigmaTemplate,
  DropShadowRightFigmaTemplate,
  DropShadowLeftFigmaTemplate,
  DropShadowDownFigmaTemplate
} from '../../src/apps/AccelerationHQ/components/DropShadow/index.js'
import { withInfo } from '@storybook/addon-info'
import { componentLibraryRoot } from '../roots'

storiesOf(componentLibraryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${componentLibraryRoot}/Elevation`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('Drop Shadow Up', () => (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        justifyContent: 'space-evenly',
        background: '#eee',
        alignItems: 'center'
      }}
    >
      <DropShadowUpFigmaTemplate />
    </div>
  ))
  .add('Drop Shadow Inner', () => (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        justifyContent: 'space-evenly',
        background: '#eee',
        alignItems: 'center'
      }}
    >
      <DropShadowInnerFigmaTemplate />
    </div>
  ))
  .add('Drop Shadow Right', () => (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        justifyContent: 'space-evenly',
        background: '#eee',
        alignItems: 'center'
      }}
    >
      <DropShadowRightFigmaTemplate />
    </div>
  ))
  .add('Drop Shadow Left', () => (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        justifyContent: 'space-evenly',
        background: '#eee',
        alignItems: 'center'
      }}
    >
      <DropShadowLeftFigmaTemplate />
    </div>
  ))
  .add('Drop Shadow Down', () => (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        justifyContent: 'space-evenly',
        background: '#eee',
        alignItems: 'center'
      }}
    >
      <DropShadowDownFigmaTemplate />
    </div>
  ))
