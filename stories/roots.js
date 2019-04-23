import React from 'react'

import { setupGraphiQL } from '@storybook/addon-graphql'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

export const componentLibraryRoot = `AccelerationHQ|Component Library`
export const formFieldLibraryRoot = `${componentLibraryRoot}/VMS Form Field Library`
export const buttonRoot = `${formFieldLibraryRoot}/Vms Buttons`

export const appModuleStoryRoot = `AccelerationHQ|App Modules`
export const jobsModuleStoryRoot = `${appModuleStoryRoot}/Jobs`

export const createAppModuleStory = appModule => {
  const root = `${appModuleStoryRoot}/${appModule.name}`
  return storiesOf(root, module).addDecorator(withKnobs)
}
