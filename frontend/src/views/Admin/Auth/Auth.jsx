import React from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';


const Auth = () => {

    const {idAdmin} = useParams()
    
    const cargarDatosUsuario = axios.post('http://localhost:8080/api/admin/' + idAdmin).then((response) => {
        console.log('hola')
    }).catch((error) => {

    }) 

    return(
        <div>
            <p>El id: {idAdmin}</p>
            <button>Click ME!</button>
        </div>
    ) 

}

export default Auth;