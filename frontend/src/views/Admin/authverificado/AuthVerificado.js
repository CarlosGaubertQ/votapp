import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Button} from '@material-ui/core'
import {Box} from '@material-ui/core'
import {Grid} from '@material-ui/core'
import {Card} from '@material-ui/core'
import {Container} from '@material-ui/core'
import {Typography} from '@material-ui/core'
import {Icon} from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    tarjeta:{
        paddingBottom:'20px',
        borderRadius:'20px',
        background:'#b1ee95',
        border: '2px solid black',
    },
    botones:{
        marginLeft:'25px',
        width:'90%',
    },
    textfield:{
        width:'80%',
        marginLeft:'40px',
        padding:'5px',
        border:'2px black'
    },
    box:{
        color:'Black',
        fontSize:'20px',
        marginLeft:'3.5rem',
        fontSize:'1.5rem',
        textDecoration:'underline'
    }, 
    imagen:{
        padding:'20rem',
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
}))


export default function AuthVerificado () { 
    
    const css = useStyle()

    return(
        <Grid className={css.imagen}> 
            <Container maxWidth="sm">
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
                    >Cuenta Verificada</Box>
                    <Box
                        className={css.box}
                        marginBottom={3}
                        marginLeft={2}
                    ><p>Tu cuenta ha sido activada con exito!!</p></Box>
                    <Button
                        className={css.botones} 
                        variant="contained" 
                        color="secondary" 
                        href="#" 
                        target="_blank"
                    >ir al inicio<Icon>check_circle</Icon></Button>
                </Typography>
            </Card>
        </Container>      
        </Grid>
    )
}