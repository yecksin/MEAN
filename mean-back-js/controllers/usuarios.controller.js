const {response} = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario.model');
const { request } = require('express');
const { generarJWT } = require('../helpers/jwt');

const getUsuarios = async (req, res) => {
  // const usuarios = await Usuario.find();
  const desde = Number(req.query.desde) || 0;
  

  //? para hacer dos promesas a la misma vez
  const [usuarios, total] = await Promise.all([
    Usuario.find({},'nombre email role google img').skip(desde).limit(5),
    Usuario.countDocuments()
  ]);

  // const usuarios = await Usuario.find({},'nombre').skip(desde).limit(5);
  // const total = await Usuario.count();

  console.log(req.tokenMsg)
  res.json({
    ok: true,
    usuarios,
    total
  })
}

//? el response es para tener el tipado de response
const crearUsuario = async (req, res = response) => {
  const {email,password, nombre} = req.body;


  try {

    const exissteEmail = await Usuario.findOne({email})
    console.log(exissteEmail)
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
    
    
    let userCreated = await usuario.save();
    const token = await generarJWT(userCreated.id)
    console.log(token)
    usuario.token = token
    res.json({
      ok: true,
      message: `Usuario ${nombre} creado`,
      usuario,
      token
      
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
    const { password,google,email, ...campos} = req.body
    //? no actailizar lo mismo
    if (usuarioDB.email !== email) {
      //? si el email ya existe
      const existeEmail = await Usuario.findOne({email})
      if (existeEmail) {
        return     res.status(400).json({
          ok:false,
          message: "ya existe usuario con ese email"
        })
      }
    }

    campos.email = email;
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

const borrarUsuario = async (req, res = response)=>{
  console.log(req.params.id)
  try {
    
    const usuarioDB = await Usuario.findById(req.params.id);
    console.log(usuarioDB)
    if (!usuarioDB) {
        return res.status(404).json({
          ok:false,
          msg: 'No existe un usuario con ese id'
        })
    }

    await Usuario.findByIdAndDelete(req.params.id)

    console.log('##### Hola:  #####');
    res.json({
      ok:true,
      uid: req.params.id
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok:false,
      error
    })
  }
}


module.exports = {
  getUsuarios, crearUsuario, actualizarUsuario, borrarUsuario
}