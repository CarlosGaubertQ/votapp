import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import SignUp from './SignUp'
import axios from 'axios'
import swal from 'sweetalert';
 

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link target="_blank" color="inherit" href="https://github.com/CarlosGaubertQ/votapp">
        VotApp
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  collapse: {
    marginTop: theme.spacing(4),
    alignItems: 'center',  
    align: 'center',  
    textAlign: 'center'
  },
  centrar: {
    marginTop: theme.spacing(1),
    alignItems: 'center',  
    align: 'center',  
    textAlign: 'center'
  },
}));

export default function Login() {
  const classes = useStyles();
  const [ coll, setcoll ] = useState(false)
  const { register, handleSubmit } = useForm();


  const cambio = () =>{
      setcoll(!coll)
  }

  const onSubmit = data => {
    if (data.email === "" || data.password === "") {
        swal({
            title: "Cuidado !",
            text: "Debes llenar los espacios vacios",
            icon: "warning",
            button: "Continuar",
        });
    }else{
        axios
            .post("http://localhost:8080/api/admin/validar", {
              ad_correo_electronico: data.email,
              ad_contrasenia: data.password
            })
            .then(
                (response) => {

                    if(response.data.message === 'correcto'){
                        swal({
                            title: "Cuenta de administrador",
                            text: response.data.mensaje,
                            icon: "success",
                            button: "Continuar",
                        });
                        
                        if(response.data.cuenta_activada === true){
                          localStorage.setItem('TOKEN_VOTAPP_ISW',response.data.token)
                          if(data.recordar === "remember"){
                              localStorage.setItem('RECORDAR_VOTAPP_ISW',"remember")
                          }

                          window.location = "/home"
                        
                        }else{
                          window.location = "/auth/" + response.data.ad_id
                        }
                        
                    }
                    
                    
                    
                }
            )
            .catch((err) => {
                if (err.response) {
                    if (err.response.status === 401) {
                        let motivo = err.response.data.message;
                        swal({
                            title: "Algo fallo",
                            text: motivo,
                            icon: "error",
                            button: "Continuar",
                        });
                    }
                    console.log(err.response.data.mensaje)
                } else if (err.request) {
                    // client never received a response, or request never left
                    swal({
                        title: "Algo fallo",
                        text: "No existe conexion con la base de datos",
                        icon: "error",
                        button: "Continuar",
                    });
                } else {
                    // anything else
                 
                }
            });
        }
}


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ¡Ingresa!
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}  className={classes.form} >
            <TextField
              variant="outlined"
              margin="normal"
              
              fullWidth
           
              inputRef={register}
              label="Correo electronico"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
    
              inputRef={register}
              autoComplete="current-password"
            />
            <FormControlLabel inputRef={register}  name="recordar"
              control={<Checkbox value="remember" color="secondary" />}
              label="Recordar"
              
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Entrar
            </Button>
            </form>
              <Grid item className={classes.centrar}>
                <Link href="#" variant="body2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid className={classes.collapse} >
                
                <Link href="#" className={classes.collapse} onClick={cambio}>
                  ¿No tienes una cuenta? Registrate
                </Link>
                <Collapse in={coll}>
                    <SignUp />
                </Collapse>

              </Grid>
          
            <Box mt={5}>
              <Copyright />
            </Box>
      
        </div>
      </Grid>
    </Grid>
  );
}