import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { createMuiTheme, MuiThemeProvider,withStyles } from '@material-ui/core/styles'


const styles = {
  root:{
    flexGrow:1,
  }
}
const theme = createMuiTheme({
  palette:{
    primary:{main:'#ffffff'},
  }
})
const Home = props => {
  const { classes } = props
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="primary" elevation={0}>
          <Toolbar variant="dense">
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  )
  
}

export default withStyles(styles)(Home)
