import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    padding: 20
  },
  table: {
    minWidth: 500,

  },
  tableHeader: {
    fontSize: 12,
    fontFamily: 'Avenir',
    fontWeight: '600',
    color: '#212121'
  }
})

let id = 0
function createData ( Worker, Status, BillRate, CostDate, TotalCost, ModifyStartDate, EndDate, TimeCardSubmittalDate, End, Vendor, Submitted ) {
  id += 1
  return { Worker, Status, BillRate, CostDate, TotalCost, ModifyStartDate, EndDate, TimeCardSubmittalDate, End, Vendor, Submitted }
}

const rows = [
  createData('Mike Lovascio', 159, 6.0, 24, 4.0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
  createData('Daddy Greco', 237, 9.0, 37, 4.3, 0, 0, 0, 0, 0, 0, 0, 0, 0),
  createData('P Steezy', 262, 16.0, 24, 6.0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
  createData('Lee Bag', 305, 3.7, 67, 4.3, 0, 0, 0, 0, 0, 0, 0, 0, 0),
  createData('J Capitan', 356, 16.0, 49, 3.9, 0, 0, 0, 0, 0, 0, 0, 0)
]

function VmsTable (props) {
  const { classes } = props

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeader}>Contingent Worker</TableCell>
            <TableCell className={classes.tableHeader} align='center'>
              ID
            </TableCell>
            <TableCell className={classes.tableHeader} align='center'>
              Status
            </TableCell>
            <TableCell className={classes.tableHeader} align='center'>
              Bill Rate
            </TableCell>
            <TableCell className={classes.tableHeader} align='center'>
              Cost to Date
            </TableCell>
            <TableCell className={classes.tableHeader} align='center'>
              Total Cost
            </TableCell>
            <TableCell className={classes.tableHeader} align='center'>
              Modify
            </TableCell>
            <TableCell className={classes.tableHeader} align='center'>
              Start Date
            </TableCell>
            <TableCell className={classes.tableHeader} align='center'>
              End Date
            </TableCell>
            <TableCell className={classes.tableHeader} align='center'>
              Time Card Submittal Date
            </TableCell>
            <TableCell className={classes.tableHeader} align='center'>
              End
            </TableCell>
            <TableCell className={classes.tableHeader} align='center'>
              Vendor
            </TableCell>
            <TableCell className={classes.tableHeader} align='center'>
              Submitted
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                {Object.keys(row).map(key => (
                  <TableCell key={key} align='center'>{row[key] ? row[key] : 0}</TableCell>
                ))}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}

VmsTable.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VmsTable)
