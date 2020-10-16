import express, {json} from 'express'
const morgan = require('morgan')
const app = express()
import AdministradorRoute from './routes/AdministradorRoute'
import FormularioRoute from './routes/FormularioRoute'
import cors from 'cors'

//middlewares
app.use(morgan('dev'))
app.use(json())
app.use(cors())

//routes
app.use('/api/admin', AdministradorRoute)
app.use('/api/formulario', FormularioRoute)


export default app;
