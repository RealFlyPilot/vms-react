import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'
import { WithFigma } from 'storybook-addon-figma'
import { GridOverlay } from '../../src/apps/AccelerationHQ/components/GridOverlay'
import { withInfo, addParameters } from '@storybook/addon-info'
import VmsTable from '../../src/apps/AccelerationHQ/components/VmsTable'
import TableContainer from '../../src/apps/AccelerationHQ/components/TableContainer'
import { jobsModuleStoryRoot } from '../roots'

storiesOf(jobsModuleStoryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${jobsModuleStoryRoot}`, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
