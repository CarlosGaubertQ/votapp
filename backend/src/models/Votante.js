import Sequelize from "sequelize";
import { sequelize } from '../database/database'

const Votante = sequelize.define('votante', {
    numero_de_documento:{
        type: Sequelize.TEXT,
        primaryKey: true,
    },
    sala_votacion_id:{
        type: Sequelize.INTEGER
    },
    for_id:{
        type: Sequelize.INTEGER
    },
    rut:{
        type : Sequelize.TEXT
    },
    correo_electronico:{
        type: Sequelize.TEXT
    },
    v_nombre:{
        type: Sequelize.TEXT
    },
    v_apellido:{
        type: Sequelize.TEXT
    },
    fecha_nacimiento:{
        type: Sequelize.DATE
    }

},{
    timestamps: false,
    freezeTableName: true,
})

export default Votante