import Sequelize from "sequelize";
import { sequelize } from '../database/database'

const Formulario = sequelize.define('formulario', {
    for_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    ad_id:{
        type: Sequelize.INTEGER
    },
    for_nombre:{
        type: Sequelize.TEXT
    }

},{
    timestamps: false,
    freezeTableName: true,
})

export default Formulario