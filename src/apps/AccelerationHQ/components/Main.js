import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { withRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { Query } from 'react-apollo'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SwipeableViews from 'react-swipeable-views'

import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ViewAgenda from '@material-ui/icons/ViewAgenda'
import ViewModule from '@material-ui/icons/ViewModule'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import gql from 'graphql-tag'

import Topbar from './Topbar'

const ALL_AIRTABLE_DATA = gql`
  query allAirtableData {
    allAirtableData {
      appModules {
        name
        id
        views {
          name
          id
          components {
            name
            id
          }
        }
      }
    }
  }
`

function TabContainer ({ children, dir }) {
  return (
    <Typography component='div' dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 200
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
    }
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  rangeLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.unit * 2
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit
  },
  actionButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit,
    width: 152
  },
  blockCenter: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center'
  },
  block: {
    padding: theme.spacing.unit * 2
  },
  box: {
    marginBottom: 40,
    height: 65
  },
  inlining: {
    display: 'inline-block',
    marginRight: 10
  },
  buttonBar: {
    display: 'flex'
  },
  alignRight: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  noBorder: {
    borderBottomStyle: 'hidden'
  },
  loadingState: {
    opacity: 0.05
  },
  loadingMessage: {
    position: 'absolute',
    top: '40%',
    left: '40%'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
})

class Main extends Component {
  state = {
    learnMoredialog: false,
    getStartedDialog: false,
    value: 0
  }

  componentDidMount () {
    console.log(this.props)
  }

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

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  render () {
    const { classes } = this.props
    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Query query={ALL_AIRTABLE_DATA}>
            {({ loading, data }) => {
              console.log('TCL: data', data)
              if (data && !loading) {
                const { allAirtableData } = data
                const { appModules } = allAirtableData

                return (
                  <Grid container justify='center'>
                    <Grid spacing={24} alignItems='center' justify='center' container className={classes.grid}>
                      <Grid item xs={12} md={4}>
                        <Paper className={classes.paper}>
                          <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            variant='fullWidth'
                            indicatorColor='primary'
                            textColor='primary'
                          >
                            <Tab icon={<ViewModule />} />
                            <Tab icon={<ViewAgenda />} />
                            <Tab icon={<ViewAgenda />} />
                          </Tabs>

                          <SwipeableViews
                            axis={'x-reverse'}
                            index={this.state.value}
                            onChangeIndex={this.handleChangeIndex}
                          >
                            <TabContainer>
                              <Typography className={classes.heading}>App Modules</Typography>
                              {appModules.map(appModule => (
                                <ExpansionPanel>
                                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>{appModule.name}</Typography>
                                  </ExpansionPanelSummary>
                                  <ExpansionPanelDetails>
                                    <Typography />
                                    <List
                                      component='nav'
                                      subheader={<ListSubheader component='div'>Views</ListSubheader>}
                                      className={classes.root}
                                    >
                                      {appModule.views.map(view => {
                                        const comps = view.components.length ? (
                                          <Collapse in timeout='auto' unmountOnExit>
                                            <Typography className={classes.heading}>Components</Typography>

                                            <List component='div' disablePadding>
                                              {view.components.map(comp => (
                                                <ListItem
                                                  className={classes.nested}
                                                  style={{ background: '#cfd0d4' }}
                                                  divider
                                                >
                                                  <ListItemIcon>
                                                    <ViewAgenda />
                                                  </ListItemIcon>
                                                  <ListItemText>{comp.name}</ListItemText>
                                                </ListItem>
                                              ))}
                                            </List>
                                          </Collapse>
                                        ) : null

                                        return (
                                          <Fragment>
                                            <ListItem button>
                                              <ListItemIcon>
                                                <ViewModule />
                                              </ListItemIcon>
                                              <ListItemText inset>{view.name}</ListItemText>
                                            </ListItem>
                                            {comps}
                                          </Fragment>
                                        )
                                      })}
                                    </List>
                                  </ExpansionPanelDetails>
                                </ExpansionPanel>
                              ))}
                            </TabContainer>
                            <TabContainer>Views</TabContainer>
                            <TabContainer>Components</TabContainer>
                          </SwipeableViews>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>
                )
              } else {
                return 'Loading'
              }
            }}
          </Query>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(withStyles(styles)(Main))

/*

   <Grid container justify='center'>
            <Grid spacing={24} alignItems='center' justify='center' container className={classes.grid}>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                      Acceleration V2
                    </Typography>

                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button onClick={this.openDialog} variant='outlined' className={classes.actionButtom}>
                      Demo
                    </Button>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                      Mason Module
                    </Typography>
                    <Typography variant='body1' gutterBottom />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button onClick={this.openDialog} variant='outlined' className={classes.actionButtom}>
                      Demo
                    </Button>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
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
                        <Button color='primary' variant='contained' className={classes.actionButtom}>
                          Learn more
                        </Button>
                      </div>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <SwipeDialog open={this.state.learnMoredialog} onClose={this.dialogClose} />
          <InstructionDialog open={this.state.getStartedDialog} onClose={this.closeGetStartedDialog} />

*/
