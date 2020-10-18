import Administrador from '../models/Administrador'
const bcrypt = require('bcrypt-nodejs');
const token = require('../service/createToken')
import {emailValidacion} from '../service/emailValidacion'
export async function getAdministradores(req, res) {
    try {
        const administradores = await Administrador.findAll()

        res.status(200).json({ data: administradores })
    } catch (error) {
        res.status(500).send({ data: [] })
    }
}

export async function createAdministrador(req, res) {

    try {
        const { ad_nombre, ad_apellido, ad_correo_electronico, ad_contrasenia } = req.body

        bcrypt.genSalt(10,(err,salt)=>{
            if(err) return res.status(400).send("Oye ocurrio un problema al momento de crear semilla para encryptar")

            bcrypt.hash(ad_contrasenia,salt,null,async(err,hash)=>{
                if(err) return res.status(400).send("Oye ocurrio un problema al momento de crear semilla para encryptar")
                const pass = hash
                let newAdministrador
                try {
                     newAdministrador = await Administrador.create({
                        codigo_activacion: Math.floor(Math.random() * (9999 - 1000)) + 1000,
                        cuenta_activada: false,
                        ad_nombre,
                        ad_apellido,
                        ad_correo_electronico,
                        ad_contrasenia: pass
                    }, {
                        fields: ['codigo_activacion', 'cuenta_activada', 'ad_nombre', 'ad_apellido', 'ad_correo_electronico', 'ad_contrasenia']
                    })
                
                } catch (error) {
                    return res.status(400).send({ message: 'Ya existe este administrador', data: []})         
                }
                
                if (newAdministrador) {
                    console.log(newAdministrador.codigo_activacion)
                    try {
                        res.status(200).send({ message: "Administrador creado correctamente", data: newAdministrador })
                        emailValidacion(newAdministrador.ad_correo_electronico,newAdministrador.ad_nombre,newAdministrador.codigo_activacion)    
                    } catch (error) {
                        return res.status(500).send({ message: 'Se creo el administrador pero no se envio el correo', data: []})    
                    }
                    return
                }
                
            })
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Algo ocurrio cuando se queria crear administrador", data: [] })
    }
}

export async function validarAdministradorLogin(req, res){
    const { ad_contrasenia, ad_correo_electronico } = req.body

    const administrador = await Administrador.findOne({
        where:{
            ad_correo_electronico:  ad_correo_electronico
        }
    })

    if(!administrador) return res.status(401).send({message: "Este Usuario no existe"})

    bcrypt.compare(ad_contrasenia, administrador.ad_contrasenia, function(error, isMatch){
        if (error) {
            res.status(500).send(`Error al validar usuario> ${error}`)
        } else if (!isMatch) {
            res.status(401).send({ message:'Contraseña incorrecta'})
        } else {
            res.status(200).send({ message :'correcto', token: token.createToken(administrador)})
        }
    })
}

export async function validarVigencia(req, res){
    const administrador = await Administrador.findOne({
        where:{
            ad_id: req.administrador
        }
    })
    if(!administrador) return res.status(401).send({message:'usuario no autorizado'})
    return res.status(200).send({administrador: administrador.ad_correo_electronico})
}

export async function getAdministrador(req, res) {
    try {
        const { id } = req.params
        const administrador = await Administrador.findOne({
            where: {
                ad_id: id
            }
        })

        if (!administrador) return res.status(400).send({ message: "No existe este administrador" })
        
        res.status(200).json({
            data: administrador
        })
    } catch (error) {
        res.status(500).send({ message: "error al conectar con el servidor" })
    }
}

export async function deleteAdministrador(req, res) {
    try {
        const { id } = req.params
        const deleteCount = await Administrador.destroy({
            where: {
                ad_id: id
            }
        })

        if (deleteCount === 0) return res.status(400).send({
            message: 'No existe este Administrador',
            count: deleteCount
        })
        res.status(200).send({
            message: 'Administrador eliminado correctamente',
            count: deleteCount
        })
    } catch (error) {
        res.status(500).send({
            message: 'Algo ocurrio cuando se queria eliminar',
            count: 0
        })
    }
}

export async function updateAdministrador(req, res) {
        const { id } = req.params
        const { codigo_activacion, cuenta_activada, ad_nombre, ad_apellido, ad_correo_electronico, ad_contrasenia } = req.body

        const administradores = await Administrador.findAll({
            where: {
                ad_id: id
            }
        })
        
        if (administradores.length > 0) {
            administradores.forEach(async administrador => {

                await administrador.update({
                    codigo_activacion,
                    cuenta_activada,
                    ad_nombre,
                    ad_apellido,
                    ad_correo_electronico,
                    ad_contrasenia
                })

            });
        }

        return res.status(200).send({
            message: 'Administrador modificado correctamente',
            data: administradores
        })
        
}