import React from 'react'
import PropTypes from 'prop-types'
import TableCell from '@material-ui/core/TableCell'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import Collapse from '@material-ui/core/Collapse'
import Tooltip from '@material-ui/core/Tooltip'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import TableSelect from '../VmsSelect/TableSelect'
import { revertCamelCase } from '../utils'

export const TableHeader = ({ classes, cssClass, colHeader, orderBy, order, id, createSortHandler }) => (
  <TableCell className={`vms-table-header ${cssClass}`}>
    <div className='grip-texture' />
    <Tooltip title='Sort' placement={'bottom-start'} enterDelay={300}>
      <TableSortLabel
        active
        direction={'desc'}
        icon={<ArrowDownwardIcon className={classes.icon} />}
        onClick={e => {
          e.preventDefault()
          createSortHandler(id)
        }}
      >
        {revertCamelCase(colHeader)}
      </TableSortLabel>
    </Tooltip>
  </TableCell>
)

export const TableHeaderWithSelect = ({ classes, cssClass, colHeader, orderBy, order, id, createSortHandler }) => (
  <TableCell className={`vms-table-header__with-select  ${cssClass}`}>
    <div className='grip-texture' />
    <Tooltip title='Sort' placement={'bottom-start'} enterDelay={300}>
      <TableSortLabel
        active
        direction={'desc'}
        icon={<ArrowDownwardIcon className={classes.icon} />}
        onClick={e => {
          e.preventDefault()
          createSortHandler(id)
        }}
      >
        {revertCamelCase(colHeader)}
      </TableSortLabel>
    </Tooltip>
    <div className='dropdown'>
      <TableSelect />
    </div>
  </TableCell>
)
