import createStyles from '@material-ui/core/styles/createStyles'

export const AccelerationTheme = {
  palette: {
    primary: {
      '&$default': '',

      '&$hover': ''
    },
    secondary: {
      '&$default': '',

      '&$hover': ''
    },
    error: {
      '&$default': '',

      '&$hover': ''
    }
  },
  breakpoints: {},

  mixins: {},
  typography: {
    fontSize: 12,
    fontFamily: ['Avenir'].join(',')
  },
  overrides: {
    MuiButton: {
      // Name of the component ⚛️ / style sheet
      text: {
        // Name of the rule
        color: 'white' // Some CSS
      }
    }
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true // No more ripple, on the whole application 💣!
    }
  },
  shadows: [],

  spacing: {},
  transitions: {}
}
