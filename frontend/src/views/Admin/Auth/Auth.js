import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';


 export default function Auth ()  {
    const [administrador, setAdministrador] = useState([])
    const {idAdmin} = useParams()

    useEffect(() => {
        const cargar = async() => {
            const {data} = await axios.get('http://localhost:8080/api/admin/' + idAdmin)
                setAdministrador(data.data)
                return null
        } 
        cargar()
    }, [idAdmin])
    
    
         

    return(
        <div>
            <p>El usuario es: {administrador.ad_nombre}</p>
            <button>Click ME!</button>
        </div>
    ) 

}
