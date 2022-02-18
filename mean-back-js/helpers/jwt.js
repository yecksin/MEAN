const jwt = require("jsonwebtoken")



const generarJWT = (uid) => {

    return new Promise((resolve, reject) => {
        const payload = { uid };

        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '24h'
        }, (err, token) => {
            if (err) {
                reject(err)
            }
            resolve(token)

        });
    })



}

module.exports = {
    generarJWT
}