import Sequelize from "sequelize";
import { sequelize } from '../database/database'

const Candidato = sequelize.define('candidato', {
    candidato_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    for_id:{
        type: Sequelize.INTEGER
    },
    candidato_nombre:{
        type: Sequelize.TEXT
    },
    candidato_apellidos:{
        type: Sequelize.TEXT
    }


},{
    timestamps: false,
    freezeTableName: true,
})


export default Candidato