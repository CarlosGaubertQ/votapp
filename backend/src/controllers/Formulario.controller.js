import Formulario from '../models/Formulario'



export async function createFormulario(req, res){
    try {
        const { ad_id, for_nombre } = req.body
        let newFormulario = await Formulario.create({
            ad_id,
            for_nombre
        },{
            fields: ['ad_id', 'for_nombre']
        })

        if(newFormulario){
            res.status(200).send({message: 'Formulario creado correctamente', data: newFormulario})
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Algo ocurrio cuando se queria crear Formulario", data: {} })
    }
}

export async function getFormularios(req, res){
    try {
        const formulario = await Formulario.findAll()
        res.status(200).send({data: formulario})
    } catch (error) {
        res.status(500).send({ data: [] })
    }
}

export async function getOneFormulario(req, res){

}

export async function deleteFormulario(req, res){
    
    try {
        const { id } = req.params    

        const deleteCount = await Formulario.destroy({
            where: id
        })

        if (deleteCount === 0) return res.status(400).send({
            message: 'No existe este Formulario',
            count: deleteCount
        })
        res.status(200).send({
            message: 'Formulario eliminado correctamente',
            count: deleteCount
        })
    } catch (error) {
        res.status(500).send({
            message: 'Algo ocurrio cuando se queria eliminar',
            count: 0
        })
    }
    

}

export async function updateFormulario(req, res){
    
}

