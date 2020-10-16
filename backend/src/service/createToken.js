'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
require('dotenv').config()

function createToken(administrador){
    const payload = {
        sub: administrador.ad_id,
        iat: moment().unix(),
        exp: moment().add(1,'days').unix(),
    }

    return jwt.encode(payload,process.env.SECRET_TOKEN)
}

module.exports ={
    createToken
}