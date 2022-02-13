const {response} = require('express');
const {validationResult} = require('express-validator')
const Usuario = require('../models/usuario.model')

const getUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  // const usuarios = await Usuario.find({},'nombre');

  res.json({
    ok: true,
    usuarios
  })
}

//? el response es para tener el tipado de response
const crearUsuario = async (req, res = response) => {
  const {email} = req.body;
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({
      ok: true,
      errors: errores.mapped() //? mapped agrega como nombre de atributo el atribito que falta
    })
  }
  try {

    const exissteEmail = await Usuario.findOne({email})
    if (exissteEmail) {
      return res.status(400).json({
        ok: true,
        message: `Correo ya existe`
      })
    }

    const usuario = new Usuario(req.body)
    await usuario.save();
    res.json({
      ok: true,
      message: `Usuario ${nombre} creado`,
      usuario
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok:false,
      msg:'Error inesperado'
    });
  }



}

module.exports = {
  getUsuarios, crearUsuario
}