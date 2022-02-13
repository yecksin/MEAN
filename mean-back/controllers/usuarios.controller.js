const Usuario = require('../models/usuario.model')

const getUsuarios = (req, res) => {
  res.json({
    ok: true,
    usuarios: []
  })
}

const crearUsuario = async (req, res) => {
  console.log(req.body)
  const { email, password, nombre } = req.body;
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