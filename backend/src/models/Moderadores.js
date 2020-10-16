import Sequelize from "sequelize";
import { sequelize } from '../database/database'

const Moderador = sequelize.define('moderador', {

    mod_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    sala_votacion_id:{
        type: Sequelize.INTEGER
    },
    ad_id:{
        type: Sequelize.INTEGER
    },
    mod_nombre:{
        type: Sequelize.TEXT
    },
    mod_apellido:{
        type: Sequelize.TEXT
    },
    mod_correo_electronico:{
        type: Sequelize.TEXT
    },
    mod_contrasena:{
        type: Sequelize.TEXT
    }
},{
    timestamps: false,
    freezeTableName: true,
})

export default Moderador