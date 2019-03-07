import React,{ useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { createMuiTheme, MuiThemeProvider,withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

const styles = {
  root:{
    flexGrow:1,
  },
  list:{
    width:250
  },
  SRButton:{
    marginRight:20,
  },
  menu:{
    color:'#ffffff'
  }
}


const theme = createMuiTheme({
  palette:{
    primary:{main:'#323842'},
    secondary:{main:'#505660'},
  }
})
const Home = props => {
  const { classes } = props
  const [state,setState] = useState({
    drawerOpen:false,
  })
  const listItems = (
    <div className={classes.list}>
      <List>
        {
          ['Item1','Item2','Item3'].map((text,index) => (
            <ListItem button key={text}>
              <ListItemText primary={text}/>
            </ListItem>
          ))
        }
      </List>
    </div>
  )
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="primary" elevation={1}>
          <Toolbar variant="dense">
            <Grid container direction='row' justify='space-between' alignItems='center'>
              <Grid item>
                <IconButton onClick={() => setState({...state,drawerOpen:true})}>
                  <MenuIcon className={classes.menu}/>
                </IconButton>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item className={classes.SRButton}>
                    <Button variant='contained' color='secondary'>Sign in</Button> 
                  </Grid>
                  <Grid item>
                    <Button variant='contained' color='secondary'>Register</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer open={state.drawerOpen} onClose={() => setState({...state,drawerOpen:false})}>
          <div
            tabIndex={0}
            role='button'
            onClick={() => setState({...state,drawerOpen:false})}
            onKeyDown={() => setState({...state,drawerOpen:false})}
          >
            {listItems}
          </div>
        </Drawer>
      </div>
    </MuiThemeProvider>
  )
  
}

export default withStyles(styles)(Home)
