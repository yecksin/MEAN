const {response} = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario.model');
const { request } = require('express');

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

const actualizarUsuario = async  (req= request, res = response) => {
  // TODO: Validar token y comprosar si usuario es corrrecto
  console.log("actualizarUsuario")
  const uid = req.params.id

  console.log(uid)
  try {

    const usuarioDB = await Usuario.findById(uid);

    if (!usuarioDB) {
        return     res.status(404).json({
          ok:false,
          msg: 'No existe un usuario con ese id'
        })
    }

    //? actualizaciones
    const campos = req.body
    //? no actailizar lo mismo
    if (usuarioDB.email === req.body.email) {
      delete campos.email
    } else {
      //? si el email ya existe
      const existeEmail = await Usuario.findOne({email: req.body.email})
      if (existeEmail) {
        return     res.status(400).json({
          ok:false,
          message: "ya existe usuario con ese email"
        })
      }
    }


    delete campos.password;
    delete campos.google

    const usuarioActualizado = await Usuario.findByIdAndUpdate(uid, campos, {new:true}) //? new true es para que terorne el usuario actualizado no el viajo como está actualmente



    res.json({
      ok:true,
      usuarioActualizado:campos
    })
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok:false
    })
  }
}


module.exports = {
  getUsuarios, crearUsuario, actualizarUsuario
}