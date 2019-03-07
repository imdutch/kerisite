import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'

const Navbar = props => {
  return (
    <React.Fragment>
        <AppBar position="static" color="primary" elevation={1}>
          <Toolbar variant="dense">
            <Grid container direction='row' justify='space-between' alignItems='center'>
              <Grid item>
                <IconButton className={props.classes.menuButton} onClick={() => props.openDrawer()}>
                  <MenuIcon className={props.classes.menu}/>
                </IconButton>
              </Grid>
              <Grid item>
                <Grid container>
                  {
                    !props.Authenticated ? 
                      <React.Fragment>
                        <Grid item className={props.classes.SRButton}>
                          <Link to='/signin' className={props.classes.link}>
                            <Button className={props.classes.button}>Sign in</Button> 
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link to='/register' className={props.classes.link}>
                            <Button className={props.classes.button}>Register</Button>
                          </Link>
                        </Grid>
                      </React.Fragment>
                    :
                      <React.Fragment>
                        <h3>USER</h3>
                      </React.Fragment>
                  }
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Navbar
