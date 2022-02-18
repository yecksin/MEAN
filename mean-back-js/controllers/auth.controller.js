const {response} = require('express');
const Usuario = require('../models/usuario.model');
const bcrypt = require('bcryptjs');

const login = async (req, res = response) => {

    const {email, password} = req.body;

    try {

        // verifica email
        const usuarioDB = await Usuario.findOne({email})

        if (!usuarioDB) {
            return res.status(404).json({
                ok:false,
                msg:'Email no encontrado'
            });
        }

        //verificar contraseña
        const validPassword = bcrypt.compareSync(password, usuarioDB.password);

        if (!validPassword) {
            return         res.status(400).json({
                ok:false,
                msg:'Contraseña incorrecta'
              });
        }


        console.log(validPassword)
        // geenrar token
        res.json({
            ok:true,
            msg:'Logueado'
          });
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'Error inesperado'
          });
    }
}



module.exports = {
    login
  }