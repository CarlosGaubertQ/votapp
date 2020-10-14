import Sequelize from "sequelize";
import { sequelize } from '../database/database'
const bcrypt = require('bcrypt-nodejs')

const Administrador = sequelize.define('administrador', {
    ad_id: { 
        type: Sequelize.INTEGER,
        primaryKry: true,
    },
    ad_correo_electronico:{
        type: Sequelize.TEXT
    },
    ad_contrasenia:{
        type: Sequelize.TEXT
    },
    codigo_activacion:{
        type: Sequelize.INTEGER
    },
    cuenta_activada: {
        type: Sequelize.BOOLEAN
    },
    ad_nombre: {
        type: Sequelize.TEXT
    },
    ad_apellido: {
        type: Sequelize.TEXT
    }
},{
    timestamps: false,
    freezeTableName: true,
    
   
})




Administrador.removeAttribute('id');
export default Administrador