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
import { buttonRoot, componentLibraryRoot } from '../roots'
import { allWorkerData, allCandidateData } from '../data'

storiesOf(componentLibraryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${componentLibraryRoot}/Iconography/`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
