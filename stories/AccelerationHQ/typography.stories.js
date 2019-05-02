import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'
import { WithFigma } from 'storybook-addon-figma'
import { withInfo } from '@storybook/addon-info'
import { buttonRoot, componentLibraryRoot } from '../roots'

storiesOf(componentLibraryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${componentLibraryRoot}`, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${componentLibraryRoot}/Typography/`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
