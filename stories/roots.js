import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

export const componentLibraryRoot = `AccelerationHQ|Component Library`
export const buttonRoot = `${componentLibraryRoot}/Buttons`
export const formElementRoot = `${componentLibraryRoot}/Form Elements`
export const tableElementRoot = `${componentLibraryRoot}/Table Elements`

export const appModuleStoryRoot = `AccelerationHQ|App Modules`
export const jobsModuleStoryRoot = `${appModuleStoryRoot}/Jobs`

export const createAppModuleStory = appModule => {
  const root = `${appModuleStoryRoot}/${appModule.name}`
  return storiesOf(root, module).addDecorator(withKnobs)
}
