import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button, Container} from '@material-ui/core';
import {Box} from '@material-ui/core'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  bg:{
      marginTop:'7rem',
      boxShadow: '5px 10px hsl(198, 63%, 38%)',
      borderRadius:'20px',
      paddingTop:'1em',      
      paddingBottom:'1em',
      width:'100%',
      backgroundColor: 'PowderBlue'
  },
  box:{
    paddingLeft:'3rem',    
    borderRadius:'15px',
    background: 'linear-gradient(135deg, hsl(139, 36%, 78%) 0%, white 100%)'
  }
});

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
    <Container className={classes.bg}>
        <Box
            className={classes.box}
            fontSize="h3.fontSize"
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
        variant='contained'
        color='primary'
    >ENVIAR ESTADISTICAS A LOS VOTANTES</Button>
    </Container>
  );
}
