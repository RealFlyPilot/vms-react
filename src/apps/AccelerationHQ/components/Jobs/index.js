import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
// import { withRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
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
import Topbar from '../Topbar'

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

class Jobs extends Component {
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
    const { classes, data } = this.props
    const { views } = data
    return (
      <React.Fragment>
        <CssBaseline />

        <div className={classes.root}>
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

            <SwipeableViews axis={'x-reverse'} index={this.state.value} onChangeIndex={this.handleChangeIndex}>
              <TabContainer>
                <Typography className={classes.heading}>{data.name} Views</Typography>
                {views.map(view => (
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.heading}>{view.name}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography />
                      <List
                        component='nav'
                        subheader={<ListSubheader component='div'>Views</ListSubheader>}
                        className={classes.root}
                      >
                        {views.components && views.components.length
                          ? views.components.map(component => {
                            return (
                              <Fragment>
                                <ListItem button>
                                  <ListItemIcon>
                                    <ViewModule />
                                  </ListItemIcon>
                                  <ListItemText inset>{component.name}</ListItemText>
                                </ListItem>

                                {/* <Collapse in timeout='auto' unmountOnExit>
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
                                      </Collapse> */}
                              </Fragment>
                            )
                          })
                          : null}
                      </List>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                ))}
              </TabContainer>
              <TabContainer>Views</TabContainer>
              <TabContainer>Components</TabContainer>
            </SwipeableViews>
          </Paper>
          )
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Jobs)
