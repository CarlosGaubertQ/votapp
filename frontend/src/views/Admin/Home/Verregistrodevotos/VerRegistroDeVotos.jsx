import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button, Container, Grid} from '@material-ui/core';
import {Box} from '@material-ui/core'
import NavBar from '../Navbar'


const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  bg:{
      marginTop:'3rem',
      paddingTop:'1em',      
      paddingBottom:'10rem',
      width:'80%',
      backgroundColor: 'linear-gradient(135deg, hsl(201, 22%, 68%) 0%, white 100%)',
      marginLeft:'auto',
      marginRigth:'auto',
  },
  box:{
    paddingLeft:'3rem',    
    background: 'hsl(90, 4%, 90%)',
    fontFamily:'Roboto',
  },
  boton:{
    marginTop:'15px',
    display:'flex',
    justifyContent:'center',
    fontSize:'1rem',
    marginLeft:'auto',
    marginRight:'auto',
    padding: '15px',
    border: '2px solid black',
    boxShadow: '2px 3px black',
  },
  imagen:{
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}))

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('SI', 159, 6.0, 24, 4.0),
  createData('NO', 237, 9.0, 37, 4.3),
  createData('NULO', 262, 16.0, 24, 6.0),
  createData('EN BLANCO', 305, 3.7, 67, 4.3),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <>
    <Grid
      className={classes.imagen}
    >
            <NavBar
        className={classes.nav}
      ></NavBar>
      <Container className={classes.bg}>
        <Box
            className={classes.box}
            fontSize="h4.fontSize"
        >
            Resultado votaciones sala: #
        </Box>
        <TableContainer component={Paper}>
        
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>OPCIONES VOTOS</TableCell>
            <TableCell align="right">Numeros de votos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button
        className={classes.boton}
        variant='contained'
        color='secondary'
    >ENVIAR ESTADISTICAS A LOS VOTANTES</Button>
    </Container>   
    </Grid>

  </>  
  );
}
