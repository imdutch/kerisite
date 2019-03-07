import React,{ useState } from 'react'
import { createMuiTheme, MuiThemeProvider,withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Drawer from '@material-ui/core/Drawer'
import Navbar from './../components/navbar'

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
  button:{
    color:'#ffffff',
    borderRadius:40
  },
  menu:{
    color:'#ffffff',
  },
  menuButton:{
    marginLeft:-12,
    marginRight:20,
  },
  link:{
    textDecoration:'none'
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
  const openDrawer = _ => {
    setState({...state,drawerOpen:true})
  }
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
        <Navbar Authenticated={false} classes={classes} setState={setState} openDrawer={openDrawer}/>
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
