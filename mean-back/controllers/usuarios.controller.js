const Usuario = require('../models/usuario.model')

const getUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  // const usuarios = await Usuario.find({},'nombre');

  res.json({
    ok: true,
    usuarios
  })
}

const crearUsuario = async (req, res) => {
  const usuario = new Usuario(req.body)
  await usuario.save();
  res.json({
    ok: true,
    message: `Usuario ${nombre} creado`,
    usuario
  })
}

module.exports = {
  getUsuarios, crearUsuario
}