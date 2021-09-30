import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import Router from './Router'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router />
  </ThemeProvider>,
  document.getElementById('root')
);