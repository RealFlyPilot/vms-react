import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
// import InputAdornment from '@material-ui/core/InputAdornment'
// import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
// import TextField from '@material-ui/core/TextField'

import './index.scss'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    flexBasis: 200
  }
})

class VmsInput extends React.Component {
  state = {
    title: ''
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value })
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }))
  }

  render () {
    return (
      <FormControl
        fullWidth
        className='vms-input-form-control'
        disabled={!this.props.editable}
        error={this.props.error}
      >
        <InputLabel className='vms-input-label' htmlFor='adornment-title'>
          {this.props.error ? 'Error' : 'Title'}
        </InputLabel>
        <Input
          className='vms-input'
          id='adornment-title'
          value={this.state.title}
          onChange={this.handleChange('Title')}
          // startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
    )
  }
}

VmsInput.propTypes = {
  type: PropTypes.object.isRequired,
  cssClass: PropTypes.string,
  editable: PropTypes.bool,
  error: PropTypes.bool,
  inactive: PropTypes.bool
}

export default VmsInput // withStyles(styles)(VmsInput)
