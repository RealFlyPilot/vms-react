import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'
import { lighten } from '@material-ui/core/styles/colorManipulator'

import VmsTable from './VmsTable'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    padding: 20
  },
  table: {
    minWidth: 500
  },
  tableHeader: {
    fontSize: 12,
    fontFamily: 'Avenir',
    fontWeight: '600',
    color: '#212121'
  }
})

let id = 0
function createData (
  ContingentWorker,
  Id,
  Status,
  BillRate,
  CostDate,
  TotalCost,
  Modify,
  StartDate,
  EndDate,
  TimeCardSubmittalDate,
  End,
  Vendor,
  Submitted
) {
  id += 1
  return {
    ContingentWorker,
    Id: id,
    Status,
    BillRate,
    CostDate,
    TotalCost,
    Modify,
    StartDate,
    EndDate,
    TimeCardSubmittalDate,
    End,
    Vendor,
    Submitted
  }
}

class TableContainer extends React.Component {
  state = {
    order: 'asc',
    orderBy: 'Status',
    selected: [],
    data: [
      createData('Mike Lovascio', 159, 6.0, 24, 4.0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
      createData('Daddy Greco', 237, 9.0, 37, 4.3, 0, 0, 0, 0, 0, 0, 0, 0, 0),
      createData('P Steezy', 262, 16.0, 24, 6.0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
      createData('Lee Bag', 305, 3.7, 67, 4.3, 0, 0, 0, 0, 0, 0, 0, 0, 0),
      createData('J Capitan', 356, 16.0, 49, 3.9, 0, 0, 0, 0, 0, 0, 0, 0)
    ],
    page: 0,
    rowsPerPage: 5
  }

  handleRequestSort = (event, property) => {
    const orderBy = property
    let order = 'desc'

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc'
    }

    this.setState({ order, orderBy })
  }

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }))
      return
    }
    this.setState({ selected: [] })
  }

  handleClick = (event, id) => {
    const { selected } = this.state
    const selectedIndex = selected.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    }

    this.setState({ selected: newSelected })
  }

  handleChangePage = (event, page) => {
    this.setState({ page })
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value })
  }
  createSortHandler = property => event => {
  this.props.onRequestSort(event, property)
}


  isSelected = id => this.state.selected.indexOf(id) !== -1

  render () {
    const { classes } = this.props
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <VmsTable
            numSelected={selected.length}
            order={order}
            createSortHandler={this.createSortHandler}
            orderBy={orderBy}
            selected={this.state.selected}
            onSelectAllClick={this.handleSelectAllClick}
            onRequestSort={this.handleRequestSort}
            rowCount={data.length}
            data={this.state.data}
          />

          {/* <Table className={classes.table} aria-labelledby='tableTitle'>
            <TableContainerHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>

              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table> */}
        </div>
      </Paper>
    )
  }
}

TableContainer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TableContainer)
