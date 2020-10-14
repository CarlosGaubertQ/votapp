import express, {json} from 'express'
const morgan = require('morgan')
const app = express()
import AdministradorRoute from './routes/AdministradorRoute'

//middlewares
app.use(morgan('dev'))
app.use(json())


//routes
app.use('/api/admin', AdministradorRoute)


export default app;
