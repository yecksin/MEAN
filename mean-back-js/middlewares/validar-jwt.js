const jwt = require("jsonwebtoken");

const validarJWT = (req, res = response, next )=>{
    //leer token

    const token = req.header('x-token')
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg:'No hay token'
          });
    }

    try {
        const {uid} = jwt.verify(token, process.env.JWT_SECRET);
        console.log(uid)
        req.uid = uid;
        req.tokenMsg = "token validado";
        next();
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg:'Token no valido'
          }); 
    }


  

}


module.exports = {
    validarJWT
}