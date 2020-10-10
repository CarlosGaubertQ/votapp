import express, {json} from 'express'
const morgan = require('morgan')
const app = express()
import adminRoute from './routes/adminRoute'

//middlewares
app.use(morgan('dev'))
app.use(json())


//routes
app.use('/api/admin', adminRoute)


export default app;
