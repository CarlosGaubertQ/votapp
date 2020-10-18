import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Inicio',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Mis Salas',
        path: '/missalas',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'Crear Sala',
        path: '/crearsala',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },
    {
        title: 'Crear Moderador',
        path: '/crearmoderador',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
    {
        title: 'Crear Formulario',
        path: '/crearformulario',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName: 'nav-text'
    },
    {
        title: 'Ver Votos',
        path: '/vervotos',
        icon: <IoIcons.IoMdHelpCircle/>,
        cName: 'nav-text'
    }
]
