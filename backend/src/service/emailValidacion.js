require('dotenv').config

async function emailValidacion(email, nombre, codigo) {
    const mailjet = require ('node-mailjet')
        .connect('deec21f32bdcaf6fb23504d95e1669eb', '8e474d3c7ec1486546cc40c765ccf7e8')
    const request = mailjet
        .post("send", { 'version': 'v3.1' })
        .request({
            "Messages": [
                {
                    "From": {
                        "Email": process.env.USEREMAIL,
                        "Name": "VotApp"
                    },
                    "To": [
                        {
                            "Email": email,
                            "Name": nombre
                        }
                    ],
                    "Subject": "Activacion de cuenta",
                    "TextPart": "",
                    "HTMLPart": "Estimado/a el siguiente codigo es para poder activar tu cuenta, registra este email y el codigo para activar tu cuenta.<br> <br><h3>"+codigo+"</h3> <br> <br> en el siguiente enlace podra acceder activar tu cuenta .......",
                    "CustomID": "AppGettingStartedTest"
                }
            ]
        })
    request
        .then((result) => {
            console.log(result.body)
        })
        .catch((err) => {
            console.log(err.statusCode)
        })

}


module.exports = {
    emailValidacion
}