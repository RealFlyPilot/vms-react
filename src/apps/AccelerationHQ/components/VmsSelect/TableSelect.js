import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'
import InputBase from '@material-ui/core/InputBase'

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  input: {
    position: 'relative',
    border: 'none',
    fontSize: 16,
    lineHeight: 'normal',
    width: 'auto'
  }
})

class TableSelect extends React.Component {
  state = {
    all: '',
    open: false
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  render () {
    const { classes } = this.props

    return (
      <form autoComplete='off'>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='demo-controlled-open-select'>All</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.all}
            onChange={this.handleChange}
            inputProps={{
              name: 'all',
              id: 'demo-controlled-open-select'
            }}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </form>
    )
  }
}

TableSelect.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TableSelect)
