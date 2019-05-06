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
import { TableHeaderWithSelect } from './TableHeader'
import { VmsButton } from '../VmsButton'
import './index.scss'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 500
  },
  tableHeader: {
    fontSize: 12,
    fontFamily: 'Avenir',
    fontWeight: '600',
    letterSpacing: '1px',
    padding: '13px 13px 0',
    color: '#212121',
    borderBottom: ' 1px solid rgba(224, 224, 224, 1)',
    borderRight: ' 1px solid rgba(224, 224, 224, 1)'
  },
  tableCell: {
    borderBottom: ' 1px solid rgba(224, 224, 224, 1)',
    borderRight: ' 1px solid rgba(224, 224, 224, 1)'
  },
  tableRow: {
    padding: '20px'
  },
  icon: {
    color: '#BDBDBD'
  }
})

function desc (a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function stableSort (array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}

function getSorting (order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy)
}

function DefaultTable (props) {
  const { classes, order, orderBy, data, createSortHandler, selected, columns } = props
  const isSelected = id => selected.indexOf(id) !== -1

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {columns.map((col, i) => (
              <TableHeaderWithSelect
                order={order}
                orderBy={orderBy}
                id={i}
                classes={classes}
                key={i}
                createSortHandler={createSortHandler}
                cssClass={classes.tableHeader}
                colHeader={col}
              />
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {stableSort(data, getSorting(order, orderBy)).map(row => {
            const selected = isSelected(row.id)
            return (
              <TableRow hover onClick={event => this.handleClick(event, row.id)} key={row.id} selected={selected}>
                {Object.keys(row).map(key => (
                  <TableCell
                    className={`${classes.tableCell} ${key === 'end' || key === 'modify' ? 'raised' : ''}`}
                    key={key}
                    align='left'
                  >
                    {key === 'end' || key === 'modify' ? (
                      <VmsButton buttonType='secondary'>{row[key]}</VmsButton>
                    ) : (
                      row[key]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}

DefaultTable.propTypes = {
  classes: PropTypes.object.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired
}

export default withStyles(styles)(DefaultTable)
