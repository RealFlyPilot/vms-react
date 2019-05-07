import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import { VmsButton } from '../VmsButton'
import IconButton from '@material-ui/core/IconButton'
import './index.scss'

const styles = theme => ({
  primary: {
    backgroundColor: '#607d8b',
    display: 'flex',
    fontSize: '12px'
  },
  snackBarMessage: {
    display: 'flex',
    fontSize: '12px',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center'
  },

  close: {
    padding: theme.spacing.unit / 2
  }
})

class VmsSnackBar extends React.Component {
  state = {
    open: false
  }

  handleClick = () => {
    this.setState({ open: true })
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.setState({ open: false })
  }

  render () {
    const { classes, variant } = this.props
    return (
      <div>
        <Button onClick={this.handleClick}>Open simple snackbar</Button>
        <Snackbar
          className={classes.snackBarMessage}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
        >
          <SnackbarContent
            className={`snackbar-content ${classes.primary}`}
            aria-describedby='client-snackbar'
            message={
              <div id='client-snackbar' className={classes.snackBarMessage}>
                <p style={{ width: '70%' }}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
                </p>
                {variant === 'message-cta' || variant === 'message-cta-close' ? (
                  <VmsButton buttonType='link'>Call To Action</VmsButton>
                ) : null}
                {variant === 'message-cta-close' ? <CloseIcon className={classes.icon} /> : null}
              </div>
            }
          />
        </Snackbar>
      </div>
    )
  }
}

VmsSnackBar.propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['message', 'message-cta', 'message-cta-close']).isRequired
}

export default withStyles(styles)(VmsSnackBar)
