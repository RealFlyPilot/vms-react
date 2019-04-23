import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import WorkerTable from './WorkerTable'
import CandidateTable from './CandidateTable'

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

class VmsTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      order: 'asc',
      orderBy: 'Status',
      selected: [],
      data: [],
      page: 0,
      rowsPerPage: 5
    }

    this.candidateSchema = [
      'candidate',
      'engageorReject',
      'status',
      'resumeRelevence',
      'skillsMatch',
      'formerEmployee',
      'formerContractor',
      'rating',
      'interview',
      'currentBillRate',
      'negotiate',
      'vendor',
      'submitted'
    ]
    this.workerSchema = [
      'contingentWorker',
      'id',
      'status',
      'billRate',
      'costDate',
      'totalCost',
      'modify',
      'startDate',
      'endDate',
      'timeCardSubmittalDate',
      'end',
      'vendor',
      'submitted'
    ]
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

  createTableData = dataArray => {
    const merged = (values, keys) => values.reduce((obj, value, index) => ({ ...obj, [keys[index]]: value }), {})
    const schema = this.props.tableType === 'candidate' ? this.candidateSchema : this.workerSchema

    return dataArray.map(arr => {
      const dataObj = merged(arr, schema)
      return dataObj
    })
  }

  componentDidMount () {
    const { data } = this.props
    const tableData = this.createTableData(data)
    this.setState({
      data: tableData
    })
  }

  isSelected = id => this.state.selected.indexOf(id) !== -1

  render () {
    const { classes, tableType } = this.props
    const { data, order, orderBy, selected } = this.state
    const table =
      tableType === 'candidate' ? (
        <CandidateTable
          numSelected={selected.length}
          order={order}
          createSortHandler={this.createSortHandler}
          orderBy={orderBy}
          selected={this.state.selected}
          onSelectAllClick={this.handleSelectAllClick}
          onRequestSort={this.handleRequestSort}
          rowCount={data.length}
          data={this.state.data}
          columns={this.candidateSchema}
        />
      ) : (
        <WorkerTable
          numSelected={selected.length}
          order={order}
          createSortHandler={this.createSortHandler}
          orderBy={orderBy}
          selected={this.state.selected}
          onSelectAllClick={this.handleSelectAllClick}
          onRequestSort={this.handleRequestSort}
          rowCount={data.length}
          data={this.state.data}
          columns={this.workerSchema}
        />
      )

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>{table}</div>
      </Paper>
    )
  }
}

VmsTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tableType: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}

export default withStyles(styles)(VmsTable)
