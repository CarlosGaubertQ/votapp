import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Button} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  botones:{
      marginRight:'4px',
      background: 'hsl(133, 47%, 68%)',
      marginTop:'10px',
      marginBottom:'10px'
  }
}));

export default function NavBarRv() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button
            className={classes.botones}
            variant='contained'
          >Inicio</Button>
          <Button
            className={classes.botones}
            variant='contained'
          >Mis salas</Button>
          <Button
            className={classes.botones}
            variant='contained'
          >Crear Salas</Button>
          <Button 
            className={classes.botones}
            variant='contained'
          >Crear Formulario</Button>
          <Typography variant="h6" color="inherit">
            VotApp, Tu sitio de votaciones favorito!</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}