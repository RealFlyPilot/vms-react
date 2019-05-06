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
import { TableHeaderWithSelect, TableHeader } from '../../src/apps/AccelerationHQ/components/VmsTable/TableHeader'

import { componentLibraryRoot, tableElementRoot } from '../roots'
import { allWorkerData, allCandidateData } from '../data'

storiesOf(componentLibraryRoot, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${tableElementRoot}`, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

storiesOf(`${tableElementRoot}/Tables/Table Header`, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('w/Select', () => {
    const data = {
      classes: {
        icon: 'WorkerTable-icon-344',
        root: 'WorkerTable-root-339',
        table: 'WorkerTable-table-340',
        tableCell: 'WorkerTable-tableCell-342',
        tableHeader: 'WorkerTable-tableHeader-341',
        tableRow: 'WorkerTable-tableRow-343'
      },
      colHeader: 'contingentWorker',
      createSortHandler: () => {
        console.log('test')
      },
      cssClass: 'WorkerTable-tableHeader-341',
      id: 0,
      order: 'asc',
      orderBy: 'Status'
    }

    return (
      <TableHeaderWithSelect
        order={data.order}
        orderBy={data.orderBy}
        id={data.id}
        classes={data.classes}
        key={data.id}
        createSortHandler={() => console.log('text')}
        cssClass={data.classes.tableHeader}
        colHeader={data.colHeader}
      />
    )
  })

storiesOf(`${tableElementRoot}/Tables/Table Menu`, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Default', () => {
    const data = {
      classes: {
        icon: 'WorkerTable-icon-344',
        root: 'WorkerTable-root-339',
        table: 'WorkerTable-table-340',
        tableCell: 'WorkerTable-tableCell-342',
        tableHeader: 'WorkerTable-tableHeader-341',
        tableRow: 'WorkerTable-tableRow-343'
      },
      colHeader: 'contingentWorker',
      createSortHandler: () => {
        console.log('test')
      },
      cssClass: 'WorkerTable-tableHeader-341',
      id: 0,
      order: 'asc',
      orderBy: 'Status'
    }

    return (
      <TableHeaderWithSelect
        order={data.order}
        orderBy={data.orderBy}
        id={data.id}
        classes={data.classes}
        key={data.id}
        createSortHandler={() => console.log('text')}
        cssClass={data.classes.tableHeader}
        colHeader={data.colHeader}
      />
    )
  })

storiesOf(`${tableElementRoot}/Tables/Columns`, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Default', () => {
    const data = {
      classes: {
        icon: 'WorkerTable-icon-344',
        root: 'WorkerTable-root-339',
        table: 'WorkerTable-table-340',
        tableCell: 'WorkerTable-tableCell-342',
        tableHeader: 'WorkerTable-tableHeader-341',
        tableRow: 'WorkerTable-tableRow-343'
      },
      colHeader: 'contingentWorker',
      createSortHandler: () => {
        console.log('test')
      },
      cssClass: 'WorkerTable-tableHeader-341',
      id: 0,
      order: 'asc',
      orderBy: 'Status'
    }

    return (
      <TableHeaderWithSelect
        order={data.order}
        orderBy={data.orderBy}
        id={data.id}
        classes={data.classes}
        key={data.id}
        createSortHandler={() => console.log('text')}
        cssClass={data.classes.tableHeader}
        colHeader={data.colHeader}
      />
    )
  })

storiesOf(`${tableElementRoot}/Tables/Cells`, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Default', () => {
    const data = {
      classes: {
        icon: 'WorkerTable-icon-344',
        root: 'WorkerTable-root-339',
        table: 'WorkerTable-table-340',
        tableCell: 'WorkerTable-tableCell-342',
        tableHeader: 'WorkerTable-tableHeader-341',
        tableRow: 'WorkerTable-tableRow-343'
      },
      colHeader: 'contingentWorker',
      createSortHandler: () => {
        console.log('test')
      },
      cssClass: 'WorkerTable-tableHeader-341',
      id: 0,
      order: 'asc',
      orderBy: 'Status'
    }

    return (
      <TableHeaderWithSelect
        order={data.order}
        orderBy={data.orderBy}
        id={data.id}
        classes={data.classes}
        key={data.id}
        createSortHandler={() => console.log('text')}
        cssClass={data.classes.tableHeader}
        colHeader={data.colHeader}
      />
    )
  })

storiesOf(`${tableElementRoot}/Tables`, module)
  .addDecorator(withKnobs)
  .addDecorator(centered)

  .add('Worker Table', () => <VmsTable tableType='worker' data={allWorkerData} />)
  .add('Candidate Table', () => <VmsTable tableType='candidate' data={allCandidateData} />)
