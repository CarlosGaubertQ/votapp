require('dotenv').config()
import app from './app'

async function main() {
    await app.listen(process.env.PORT, (err)=>{
        if(err) return console.log(err)
        console.log("Escuchando en el puerto", process.env.PORT)
    })
}

main()