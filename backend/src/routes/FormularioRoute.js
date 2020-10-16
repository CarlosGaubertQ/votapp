import {Router} from 'express'
const router = Router()

import { createFormulario, getFormularios } from '../controllers/Formulario.controller'


router.post('/', createFormulario)
router.get('/', getFormularios)

export default router