import { createMuiTheme } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'

const colors = {
  primary: {
    main: '#2ec4b6',
    readable: '#27a599'
  }
}

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary.readable,
    },
    secondary: {
      main: '#ff9f1c',
    },
    error: {
      main: '#b81427',
    },
    background: {
      default: '#fff',
      light: '#f8f9fa',
      primary: fade(colors.primary.main, 0.1)
    },
    border: {
      light: fade('#eee', 0.6),
    },
    color: {
      tiffanyBlue: colors.primary.main,
      richBlack: '#011627',
    },
  },
  typography: {
    h6: {
      lineHeight: 1.25,
      marginBottom: '5px',
    },
  },
  overrides: {
    MuiButton: {
			contained: {
        backgroundColor: fade('#eee', 0.5),
        '&:hover': {
          backgroundColor: '#eee',
        },
      }
    },
    MuiChip: {
      root: {
        color: colors.primary.readable,
        fontWeight: 500,
        backgroundColor: fade(colors.primary.main, 0.1),
        '&:focus': {
          backgroundColor: fade(colors.primary.main, 0.2),
        },
        '&:hover': {
          backgroundColor: fade(colors.primary.main, 0.2),
        },
      },
      deleteIcon: {
        color: colors.primary.main,
      },
      deletable: {
        '&:focus': {
          backgroundColor: fade(colors.primary.main, 0.2),
        },
        '&:hover': {
          backgroundColor: fade(colors.primary.main, 0.2),
        },
      },
    },
    MuiCardActionArea: {
      root: {
        '&:hover': {
          backgroundColor: fade(colors.primary.main, 0.03),
        },
      }
    }
  },
})

export default theme
