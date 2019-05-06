import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'
import { WithFigma } from 'storybook-addon-figma'
import { withInfo, addParameters } from '@storybook/addon-info'
import { componentLibraryRoot } from '../roots'
import {
  Dot,
  Edit,
  Error,
  FPO,
  Menu,
  More,
  Pending,
  Schedule,
  Share,
  CheckBox,
  DropdownArrow,
  Heart,
  RatingStar,
  SortArrow,
  Grip,
  GripTexture,
  CaretDown
} from '../../src/apps/AccelerationHQ/components/Icons/index.js'

storiesOf(componentLibraryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${componentLibraryRoot}/Iconography/`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)

storiesOf(`${componentLibraryRoot}/Iconography/Dot`, module).add('Default', () => <Dot />)
storiesOf(`${componentLibraryRoot}/Iconography/Edit`, module).add('Default', () => <Edit />)
storiesOf(`${componentLibraryRoot}/Iconography/Error`, module).add('Default', () => <Error />)
storiesOf(`${componentLibraryRoot}/Iconography/FPO`, module).add('Default', () => <FPO />)
storiesOf(`${componentLibraryRoot}/Iconography/Menu`, module).add('Default', () => <Menu />)
storiesOf(`${componentLibraryRoot}/Iconography/More`, module).add('Default', () => <More />)
storiesOf(`${componentLibraryRoot}/Iconography/Pending`, module).add('Default', () => <Pending />)
storiesOf(`${componentLibraryRoot}/Iconography/Schedule`, module).add('Default', () => <Schedule />)
storiesOf(`${componentLibraryRoot}/Iconography/Share`, module).add('Default', () => <Share />)
storiesOf(`${componentLibraryRoot}/Iconography/CheckBox`, module).add('Default', () => <CheckBox />)
storiesOf(`${componentLibraryRoot}/Iconography/DropdownArrow`, module).add('Default', () => <DropdownArrow />)
storiesOf(`${componentLibraryRoot}/Iconography/Heart`, module).add('Default', () => <Heart />)
storiesOf(`${componentLibraryRoot}/Iconography/RatingStar`, module).add('Default', () => <RatingStar />)
storiesOf(`${componentLibraryRoot}/Iconography/SortArrow`, module).add('Default', () => <SortArrow />)
storiesOf(`${componentLibraryRoot}/Iconography/Grip`, module).add('Default', () => <Grip />)
storiesOf(`${componentLibraryRoot}/Iconography/GripTexture`, module).add('Default', () => <GripTexture />)
