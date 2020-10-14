import {Router} from 'express'
const router = Router()
import { createAdministrador, getAdministradores, getAdministrador, deleteAdministrador, updateAdministrador }from '../controllers/Administrador.controller'   

router.post('/' , createAdministrador)
router.get('/', getAdministradores)
router.get('/:id', getAdministrador)
router.delete('/:id', deleteAdministrador)
router.put('/:id', updateAdministrador)

export default router