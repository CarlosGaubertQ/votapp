import React, { useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'
import axios from 'axios';
import {Container} from '@material-ui/core';
import {Button} from '@material-ui/core'
import {Box} from '@material-ui/core/'
import {Typography} from '@material-ui/core'
import {TextField} from '@material-ui/core'
import {Card} from '@material-ui/core'
import {Grid} from '@material-ui/core'
import { IconButton } from '@material-ui/core';
import { SiGmail } from "react-icons/si";
<<<<<<< HEAD
=======
import {SiMicrosoftoutlook} from "react-icons/si";
>>>>>>> dc50b2e0a79c223fd32925c9dd2194c28df2bf6b

//styles
const useStyle = makeStyles((theme) => ({
    tarjeta:{
        paddingBottom:'20px',
        borderRadius:'20px',
        background:'#e5d7d7',
        border: '4px solid black',
        boxShadow:'5px 10px black'
    },
    botones:{
        marginLeft:'25px',
        width:'90%',
        marginTop:'1em'
    },
    textfield:{
        width:'80%',
        marginLeft:'40px',
        padding:'5px',
        border:'2px black',
        marginTop: '1em'
    },
    box:{
        color:'Black',
        marginBottom:'5px',
        marginLef:'5px',
    }, 
    imagen:{
        padding:'15rem',
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    menuButton:{
        marginRight: theme.spacing(2),
    },
    title:{
        flexGrow:'1',
    },
    root:{
        flexGrow:'1',
    },
    icono:{
        background:'white',
    },
    iconoBoton:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:'2rem',
        padding:'0px'
    }
}))


 export default function Auth ()  {

    const css = useStyle()


    //Funciones
    const [administrador, setAdministrador] = useState([])
    const {idAdmin} = useParams()

    useEffect(() => {
        const cargar = async() => {
            const {data} = await axios.get('http://localhost:8080/api/admin/' + idAdmin)
                setAdministrador(data.data)
                console.log("hola mundoo")
                return null
        } 
        cargar()
    }, [idAdmin])

         
    return(
    <>        
        <Grid className={css.imagen}> 
            <Container maxWidth="sm">
<<<<<<< HEAD
            <Card 
                className={css.tarjeta}
            >
                <Typography 
                    component="div">
                    <Box 
                        fontSize="h4.fontSize" 
                        m={1} 
                        letterSpacing={2} 
                        textAlign='center'
                    >Activa tu cuenta</Box>
                    <Box
                        fontSize={14}
                        marginBottom={3}
                        marginLeft={2}
                    >Estimado {administrador.ad_nombre}. Hemos enviado un codigo de activación a '{administrador.ad_correo_electronico}'. Por favor verifique su correo y active su cuenta.</Box>
                    <IconButton
                      
                        
                        href="https://gmail.com"
                        color="secondary">
                        <SiGmail color="primary"/>
                    </IconButton>
                    <Button 
                        className={css.botones}
                        variant="contained" 
                        color="primary" 
                        href="https://hotmail.com" 
                        target="_blank"
                    >Ir a Outlook</Button>
                </Typography>
                <Typography component='div'>
                    <Box
                        className={css.box}
                        marginLeft={2}
                        marginTop={3}
                        fontSize={20}
                    >
                        Ingresa el CÓDIGO que recibiste acá!
                    </Box>
                    <TextField 
                        className={css.textfield}
                        id="outlined-basic" 
                        label="CODIGO" 
                        variant="filled" 
                        fullWidth />
                    <Button 
                        className={css.botones}
                        variant='contained'
                        color='secondary'
                        fullWidth
                    >Enviar</Button>
                </Typography>
            </Card>
        </Container>      
        </Grid>
        
=======
                <Card 
                    className={css.tarjeta}>
                    <Typography 
                        component="div">
                        <Box 
                            fontSize="h4.fontSize" 
                            m={1} 
                            letterSpacing={2} 
                            textAlign='center'
                        >Activa tu cuenta</Box>
                        <Box
                            fontSize={16}
                            marginBottom={3}
                            marginLeft={2}
                        >Estimado {administrador.ad_nombre}. Hemos enviado un codigo de activación a '{administrador.ad_correo_electronico}'. Por favor verifique su correo y active su cuenta.</Box>
                        <div className={css.iconoBoton}>
                        <IconButton
                            className={css.icono}
                            href="https://gmail.com/"
                            color="secondary"
                            Target="_blank"
                        ><SiGmail color="primary"/></IconButton>
                        <IconButton
                            className={css.icono}
                            href="https://hotmail.com"
                            color="primary"
                            target="_blank"
                        ><SiMicrosoftoutlook color="primary" /></IconButton>
                        </div>
                        </Typography>
                        <Typography component='div'>
                            <Box
                                className={css.box}
                                marginLeft={2}
                                marginTop={3}
                                fontSize={16}>Ingresa el CÓDIGO que recibiste acá!</Box>
                            <TextField 
                                className={css.textfield}
                                id="outlined-basic" 
                                label="CODIGO" 
                                variant="filled" 
                            />
                            <Button 
                                className={css.botones}
                                variant='contained'
                                color='secondary'
                                fullWidth>Enviar</Button>
                        </Typography>
                </Card>
            </Container>      
        </Grid>     
    </>
>>>>>>> dc50b2e0a79c223fd32925c9dd2194c28df2bf6b
    ) 

}
