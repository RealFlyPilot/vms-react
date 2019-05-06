import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'
import { WithFigma } from 'storybook-addon-figma'
import { GridOverlay } from '../../src/apps/AccelerationHQ/components/GridOverlay'
import { withInfo, addParameters } from '@storybook/addon-info'

import './iconography.js'
import './typography.js'
import './colors.js'
import './buttons.js'
import './grids.js'
import './elevation.js'
import './tables.js'
import './forms.js'
import './filters.js'
import './tab-system.js'
import './list.js'
import './summary-column.js'
import './tooltips.js'
import './navigation.js'
import './modals.js'

// storiesOf(componentLibraryRoot, module)
//   .addDecorator(withKnobs)
//   .addDecorator(centered)

// storiesOf(`${componentLibraryRoot}`, module)
//   .addDecorator(withKnobs)
//   .addDecorator(centered)

// // storiesOf(`${componentLibraryRoot}/Vms Colors/Color Pallete`, module)
// //   .addDecorator(centered)
// //   .addDecorator(withInfo)
// //   .add('All', () => <VmsColorPallete />)
// //   .add('By Color: Red', () => <VmsColorPallete color='red' />)
// //   .add('All With Grid Background', () => (
// //     <GridOverlay>
// //       <VmsColorPallete />
// //     </GridOverlay>
// //   ))
// //   .add('With Figma', () => (
// //     <WithFigma
// //       url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A0'}
// //     >
// //       <VmsColorPallete />
// //     </WithFigma>
// //   ))
