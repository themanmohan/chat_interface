import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
   
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
const Navbar=()=>{
     const classes = useStyles();
    return(
        <AppBar position="static"  >
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
     
    </IconButton>
     XBSL
    <Typography variant="h6" className={classes.title}>
  
    </Typography>
    <Button color="inherit"></Button>
  </Toolbar>
</AppBar>
    )
}


export default Navbar