import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import Collapse from '@material-ui/core/Collapse'
import Tooltip from '@material-ui/core/Tooltip'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Paper from '@material-ui/core/Paper'
import TableSelect from '../VmsSelect/TableSelect'
import { GripTexture } from '../Icons'

export const TableHeader = ({ classes, cssClass, colHeader, orderBy, order, id, createSortHandler }) => (
  <TableCell className={`vms-table-header ${cssClass}`}>
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
        {colHeader}
      </TableSortLabel>
    </Tooltip>
    <GripTexture />
  </TableCell>
)

export const TableHeaderWithSelect = ({ classes, cssClass, colHeader, orderBy, order, id, createSortHandler }) => (
  <TableCell className={`vms-table-header__with-select  ${cssClass}`}>
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
        {colHeader}
      </TableSortLabel>
    </Tooltip>
    <br />
    <div className='dropdown'>
      <TableSelect />
    </div>
    <GripTexture />
  </TableCell>
)
