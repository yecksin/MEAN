const {response} = require('express');
const bcrypt = require('bcryptjs');

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
  const {email,password, nombre} = req.body;

  try {

    const exissteEmail = await Usuario.findOne({email})
    if (exissteEmail) {
      return res.status(400).json({
        ok: true,
        message: `Correo ya existe`
      })
    }



    const usuario = new Usuario(req.body)
    //? escriptar contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password,salt);
    //? guardar usuario
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