import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'
import { WithFigma } from 'storybook-addon-figma'
import { VmsButton } from '../../src/apps/AccelerationHQ/components/VmsButton'
import { GridOverlay } from '../../src/apps/AccelerationHQ/components/GridOverlay'
import { withInfo } from '@storybook/addon-info'
import { buttonRoot, componentLibraryRoot } from '../roots'
import { FPO } from '../../src/apps/AccelerationHQ/components/Icons/index.js'

storiesOf(componentLibraryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${buttonRoot}`, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${buttonRoot}`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('All VMS Buttons', () => (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#eee',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100vw',
          justifyContent: 'space-evenly',
          background: '#eee',
          alignItems: 'center'
        }}
      >
        <div>
          <VmsButton buttonType={`primary`}>Call To Action</VmsButton>
          <h5 style={{ fontFamily: 'Avenir', textAlign: 'center', textTransform: 'capitalize' }}>primary</h5>
        </div>
        <div>
          <VmsButton buttonType={`secondary`}>Call To Action</VmsButton>
          <h5 style={{ fontFamily: 'Avenir', textAlign: 'center', textTransform: 'capitalize' }}>secondary</h5>
        </div>
        <div>
          <VmsButton buttonType={`tertiary`}>Call To Action</VmsButton>
          <h5 style={{ fontFamily: 'Avenir', textAlign: 'center', textTransform: 'capitalize' }}>tertiary</h5>
        </div>
        <div>
          <VmsButton buttonType={`pill`}>Call To Action</VmsButton>
          <h5 style={{ fontFamily: 'Avenir', textAlign: 'center', textTransform: 'capitalize' }}>pill</h5>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          width: '100vw',
          justifyContent: 'space-evenly',
          background: '#eee',
          marginTop: '40px',
          alignItems: 'center'
        }}
      >
        <div>
          <VmsButton Icon={FPO} buttonType={`primary`}>
            Call To Action
          </VmsButton>
          <h5 style={{ fontFamily: 'Avenir', textAlign: 'center', textTransform: 'capitalize' }}>primary Icon</h5>
        </div>
        <div>
          <VmsButton Icon={FPO} buttonType={`secondary`}>
            Call To Action
          </VmsButton>
          <h5 style={{ fontFamily: 'Avenir', textAlign: 'center', textTransform: 'capitalize' }}>secondary Icon</h5>
        </div>
        <div>
          <VmsButton Icon={FPO} buttonType={`tertiary`}>
            Call To Action
          </VmsButton>
          <h5 style={{ fontFamily: 'Avenir', textAlign: 'center', textTransform: 'capitalize' }}>tertiary Icon</h5>
        </div>
        <div>
          <VmsButton buttonType={'link'}>Call to Action</VmsButton>

          <h5 style={{ fontFamily: 'Avenir', textAlign: 'center', textTransform: 'capitalize' }}>Link Text</h5>
        </div>
      </div>
    </div>
  ))

storiesOf(`${buttonRoot}/Primary`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('Default', () => <VmsButton buttonType={`primary`}>Call To Action</VmsButton>, {
    info: `
            #### Primary Button CSS

            - background: #607D8B; Blue/607D8B
            - border- radius: 3px;
            - font-family: Avenir;
            - font-size: 12px;
            - line-height: 18px;
            - text-align: center;
            - color: #FFFFFF;
            - box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.18), 0px 0px 1px rgba(0, 0, 0, 0.27);
          `
  })
  .add('Hover', () => <VmsButton buttonType={`primary`}>Call To Action</VmsButton>)
  .add('Clicked', () => <VmsButton buttonType={`primary`}>Call To Action</VmsButton>)
  .add('Inactive', () => (
    <VmsButton buttonType={`primary`} disabled>
      Call To Action
    </VmsButton>
  ))

  .add(
    'W/ Figma',
    () => (
      <WithFigma
        url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A1'}
      >
        <VmsButton buttonType={`primary`}>Call To Action</VmsButton>
      </WithFigma>
    ),
    {
      info: `
            ## Figma Link: [View](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A1)
          `
    }
  )

storiesOf(`${buttonRoot}/Primary - Icon`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('Default', () => (
    <VmsButton buttonType={`primary`} Icon={FPO}>
      Call To Action
    </VmsButton>
  ))
  .add('Hover', () => (
    <VmsButton buttonType={`primary`} Icon={FPO}>
      Call To Action
    </VmsButton>
  ))
  .add('Clicked', () => (
    <VmsButton buttonType={`primary`} Icon={FPO}>
      Call To Action
    </VmsButton>
  ))
  .add('Inactive', () => (
    <VmsButton buttonType={`primary`} Icon={FPO} disabled>
      Call To Action
    </VmsButton>
  ))
  .add('Notify', () => (
    <VmsButton buttonType={`primary`} cssClass='notify' Icon={FPO}>
      Call To Action
    </VmsButton>
  ))

storiesOf(`${buttonRoot}/Secondary`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add(
    'Default',
    () => (
      <WithFigma
        url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A1'}
      >
        <VmsButton buttonType={'secondary'}>Call To Action</VmsButton>
      </WithFigma>
    ),
    {
      info: ` ## Figma Link: [View](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A1) `
    }
  )
  .add(
    'Hover',
    () => (
      <WithFigma
        url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A1'}
      >
        <VmsButton buttonType={`secondary`}>Call To Action</VmsButton>)
      </WithFigma>
    ),
    {
      info: ` ## Figma Link: [View](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A1) `
    }
  )

  .add(
    'Clicked',
    () => (
      <WithFigma
        url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A1'}
      >
        <VmsButton buttonType={`secondary`}>Call To Action</VmsButton>))
      </WithFigma>
    ),
    {
      info: ` ## Figma Link: [View](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A1) `
    }
  )

  .add(
    'Inactive',
    () => (
      <WithFigma
        url={'https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A1'}
      >
        ;
        <VmsButton buttonType={'secondary'} disabled>
          Call To Action
        </VmsButton>
      </WithFigma>
    ),
    {
      info: ` ## Figma Link: [View](https://www.figma.com/file/CRSiJREA5Lp34X9HHARnp5yn/Acceleration-%E2%80%94-Libraries?node-id=6%3A1) `
    }
  )

storiesOf(`${buttonRoot}/Secondary - Icon`, module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('Default', () => (
    <VmsButton buttonType={`secondary`} Icon={FPO}>
      Call To Action
    </VmsButton>
  ))
  .add('Hover', () => (
    <VmsButton buttonType={`secondary`} Icon={FPO}>
      Call To Action
    </VmsButton>
  ))
  .add('Clicked', () => (
    <VmsButton buttonType={`secondary`} Icon={FPO}>
      Call To Action
    </VmsButton>
  ))
  .add('Inactive', () => (
    <VmsButton buttonType={`secondary`} Icon={FPO} disabled>
      Call To Action
    </VmsButton>
  ))
  .add('Notify', () => (
    <VmsButton buttonType={`secondary`} cssClass='notify' Icon={FPO}>
      Call To Action
    </VmsButton>
  ))

storiesOf(`${buttonRoot}/Tertiary`, module)
  .addDecorator(centered)
  .add('Default', () => <VmsButton buttonType={'tertiary'}>Call To Action</VmsButton>)
  .add('Hover', () => <VmsButton buttonType={`tertiary`}>Call To Action</VmsButton>)
  .add('Clicked', () => <VmsButton buttonType={`tertiary`}>Call To Action</VmsButton>)
  .add('Inactive', () => (
    <VmsButton buttonType={'tertiary'} disabled>
      Call To Action
    </VmsButton>
  ))

storiesOf(`${buttonRoot}/Pill Button`, module).addDecorator(centered)

storiesOf(`${buttonRoot}/Pill Button/Default`, module)
  .addDecorator(centered)
  .add('Default', () => <VmsButton buttonType={'pill'}>Call To Action</VmsButton>)
  .add('Inactive', () => (
    <VmsButton buttonType={'pill'} disabled>
      Call To Action
    </VmsButton>
  ))

storiesOf(`${buttonRoot}/Pill Button/Primary`, module)
  .addDecorator(centered)
  .add('Default', () => (
    <VmsButton buttonType={'pill'} cssClass='primary'>
      Call To Action
    </VmsButton>
  ))
  .add('Inactive', () => (
    <VmsButton buttonType={'pill'} disabled cssClass='primary'>
      Call To Action
    </VmsButton>
  ))
storiesOf(`${buttonRoot}/Pill Button/Secondary`, module)
  .addDecorator(centered)
  .add('Default', () => (
    <VmsButton buttonType={'pill'} cssClass='secondary'>
      Call To Action
    </VmsButton>
  ))
  .add('Inactive', () => (
    <VmsButton buttonType={'pill'} disabled cssClass='secondary'>
      Call To Action
    </VmsButton>
  ))

storiesOf(`${buttonRoot}/Pill Button/Tertiary`, module)
  .addDecorator(centered)
  .add('Default', () => (
    <VmsButton buttonType={'pill'} cssClass='tertiary'>
      Call To Action
    </VmsButton>
  ))
  .add('Inactive', () => (
    <VmsButton buttonType={'pill'} cssClass='tertiary' disabled>
      Call To Action
    </VmsButton>
  ))

storiesOf(`${buttonRoot}/Link text`, module)
  .addDecorator(centered)
  .add('Default', () => <VmsButton buttonType={'link'}>Call to Action</VmsButton>)

storiesOf(`${buttonRoot}/Pill Label`, module)
  .addDecorator(centered)
  .add('Default', () => <VmsButton buttonType={'pill-label'}>Call To Action</VmsButton>)
  .add('Primary', () => (
    <VmsButton buttonType={'pill-label'} cssClass='primary'>
      Call To Action
    </VmsButton>
  ))
  .add('Secondary', () => (
    <VmsButton buttonType={'pill-label'} cssClass='secondary'>
      Call To Action
    </VmsButton>
  ))
  .add('Tertiary', () => (
    <VmsButton buttonType={'pill-label'} cssClass='tertiary'>
      Call To Action
    </VmsButton>
  ))
  .add('Inactive', () => (
    <VmsButton buttonType={'pill-label'} disabled>
      Call To Action
    </VmsButton>
  ))

storiesOf(`${buttonRoot}/Dropdown`, module)
  .addDecorator(centered)
  .add('Default', () => <VmsButton buttonType={'dropdown'}>Call To Action</VmsButton>)
