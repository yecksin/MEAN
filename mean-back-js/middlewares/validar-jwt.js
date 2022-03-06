const jwt = require("jsonwebtoken");
const Usuario = require('../models/usuario.model');

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

const validarADMIN_ROLE = async (req, res = response, next) => {
    const uid = req.uid
    try {
        const usuarioDB = await Usuario.findById(uid)

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario no existe'
            });
        }

        if (usuarioDB.role !== 'ADMIN_ROLE') {
            return res.status(403).json({
                ok: false,
                msg: 'No tiene privilegios'
            });
        }

        next();

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al validar role'
        });
    }
}

const validarADMIN_O_mismo_usuarioROLE = async (req, res = response, next) => {
    const uid = req.uid
    const id = req.params.id;
    try {
        const usuarioDB = await Usuario.findById(uid)

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario no existe'
            });
        }

        if (usuarioDB.role === 'ADMIN_ROLE' || uid === id) {
            next();
        }else{
            return res.status(403).json({
                ok: false,
                msg: 'No tiene privilegios'
            });
        }

        

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al validar role'
        });
    }
}


module.exports = {
    validarJWT,
    validarADMIN_ROLE,
    validarADMIN_O_mismo_usuarioROLE
}