import Sequelize from "sequelize";
import { sequelize } from '../database/database'

const Sala_de_votacion = sequelize.define('sala_de_votacion', {

    sala_votacion_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    ad_id:{
        type: Sequelize.INTEGER
    },
    for_id:{
        type: Sequelize.INTEGER
    },
    capacidad:{
        type: Sequelize.INTEGER
    }

},{
    timestamps: false,
    freezeTableName: true,
})

export default Sala_de_votacion