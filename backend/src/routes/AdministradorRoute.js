import {Router} from 'express'
const router = Router()
import { createAdministrador, getAdministradores, getAdministrador,
     deleteAdministrador, updateAdministrador,
      validarAdministradorLogin, validarVigencia, activarCuenta }from '../controllers/Administrador.controller'   
import {isAuth} from '../middlewares/auth'


// localhost:port/api/admin/
router.post('/' , createAdministrador)
router.get('/', getAdministradores)
router.get('/:id', getAdministrador)
router.delete('/:id', deleteAdministrador)
router.put('/:id', updateAdministrador)
router.post('/activarCuenta', activarCuenta)

//json web token
router.post('/validar', validarAdministradorLogin)
router.post('/vigencia', isAuth ,validarVigencia)
export default router