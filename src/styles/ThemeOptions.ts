import {createTheme} from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1DB954',
    },
    secondary: {
      main: '#B3B3B3',
    },
    background: {
      default: '#121212',
      paper: '#212121',
    },
  },
  typography: {
    fontFamily: 'Gotham',
    fontSize: 16,
  },
})
