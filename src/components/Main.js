import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { withRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import InstructionDialog from './dialogs/InstructionDialog'
import SwipeDialog from './dialogs/SwipeDialog'

import Topbar from './Topbar'

class Main extends Component {
  state = {
    learnMoredialog: false,
    getStartedDialog: false
  }

  componentDidMount () {}

  openDialog = event => {
    this.setState({ learnMoredialog: true })
  }

  dialogClose = event => {
    this.setState({ learnMoredialog: false })
  }

  openGetStartedDialog = event => {
    this.setState({ getStartedDialog: true })
  }

  closeGetStartedDialog = event => {
    this.setState({ getStartedDialog: false })
  }

  render () {
    const { classes } = this.props
    return (
      <React.Fragment>
        <div className={classes.root}>
          <Grid container justify='center'>
            <Grid
              spacing={24}
              alignItems='center'
              justify='center'
              container
              className={classes.grid}
            >
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography
                      style={{ textTransform: 'uppercase' }}
                      color='secondary'
                      gutterBottom
                    >
                      Airtable Module
                    </Typography>
                    <Typography variant='body2' gutterBottom>
                      A first title style <br /> with two lines
                    </Typography>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      onClick={this.openDialog}
                      variant='outlined'
                      className={classes.actionButtom}
                    >
                      Demo
                    </Button>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography
                      style={{ textTransform: 'uppercase' }}
                      color='secondary'
                      gutterBottom
                    >
                      Mason Module
                    </Typography>
                    <Typography variant='body1' gutterBottom />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      onClick={this.openDialog}
                      variant='outlined'
                      className={classes.actionButtom}
                    >
                      Demo
                    </Button>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography
                      style={{ textTransform: 'uppercase' }}
                      color='secondary'
                      gutterBottom
                    >
                      Style Guide Generator
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                      Work in progress
                    </Typography>
                  </div>
                  <div className={classes.alignRight}>
                    <Button
                      onClick={this.openGetStartedDialog}
                      color='primary'
                      variant='contained'
                      className={classes.actionButtom}
                    >
                      Dashboard
                    </Button>
                  </div>
                </Paper>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <div>
                      <div className={classes.box}>
                        <Typography color='secondary' gutterBottom>
                          Full box
                        </Typography>
                        <Typography variant='body1' gutterBottom>
                          This is an example of a full-width box
                        </Typography>
                      </div>
                      <div className={classes.alignRight}>
                        <Button
                          color='primary'
                          variant='contained'
                          className={classes.actionButtom}
                        >
                          Learn more
                        </Button>
                      </div>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <SwipeDialog
            open={this.state.learnMoredialog}
            onClose={this.dialogClose}
          />
          <InstructionDialog
            open={this.state.getStartedDialog}
            onClose={this.closeGetStartedDialog}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(withStyles(styles)(Main))
