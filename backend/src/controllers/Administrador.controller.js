import Administrador from '../models/Administrador'
const bcrypt = require('bcrypt-nodejs');

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

        await bcrypt.genSalt(10,(err,salt)=>{
            if(err) return console(err)

            bcrypt.hash(ad_contrasenia,salt,null,async(err,hash)=>{
                if(err) return console.log(err)
                const pass = hash
                let newAdministrador = await Administrador.create({
                    codigo_activacion: Math.floor(Math.random() * (9999 - 1000)) + 1000,
                    cuenta_activada: false,
                    ad_nombre,
                    ad_apellido,
                    ad_correo_electronico,
                    ad_contrasenia: pass
                }, {
                    fields: ['codigo_activacion', 'cuenta_activada', 'ad_nombre', 'ad_apellido', 'ad_correo_electronico', 'ad_contrasenia']
                })
        
                if (newAdministrador) {
                    return res.status(200).send({ message: "Administrador creado correctamente", data: newAdministrador })
                }
            })
        })


        

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Algo ocurrio cuando se queria crear administrador", data: {} })
    }

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
        Response.status(500).send({ message: "error al obtener administrador" })
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