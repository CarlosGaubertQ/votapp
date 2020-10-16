import Sequelize from "sequelize";
import { sequelize } from '../database/database'

const Administrador = sequelize.define('administrador', {
    ad_id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    ad_correo_electronico:{
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
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

export default Administrador