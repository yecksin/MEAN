const  path  = require('path');
const { v4: uuidv4 } = require('uuid');
const { actualizarImagen } = require('../helpers/actualizar-imagen');
const  fs  = require('fs');

const fileUpload = async (req, res = response) => {

    const tipo = req.params.tipo;
    const id = req.params.id;

    //? validar tipo
    const tiposValidos = ["hospitales","medicos","usuarios"]

    if (!tiposValidos.includes(tipo)) {
        return res.status(400).json({
            ok: true,
            message: "No es hospitales, medicos, usuarios"
        })
    }

    //? validar que exista un archivo
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: true,
            message: "'No files were uploaded.'"
        })
      }

      // Procesar imagen
      const file = req.files.imagen;

      const nombreCortado = file.name.split('.');
      const extensionArchivo = nombreCortado[nombreCortado.length - 1]
      // Validar extension
      const extensionsValida = ['png','jpg','jpeg','gif'];

      if (!extensionsValida.includes(extensionArchivo)) {
        return res.status(400).json({
            ok: true,
            message: "Extensión invalida"
        })
    }

    //generar el nombre del archivo
    const nombreArchivo = `${uuidv4()}.${extensionArchivo}`;
    //? path para guardar imagen
    const path = `./uploads/${tipo}/${nombreArchivo}`;
    file.mv(path, (err) => {
        if (err)
          return res.status(500).json({
            ok: true,
            message:'Error al mover la imagen'
        })

        // Actualizar base de datos
        actualizarImagen(tipo, id, nombreArchivo);
    
        res.json({
            ok: true,
            msg: 'archivo subido',
            nombreArchivo
        })
      });


 
 }

 const retornaImagen = async (req, res = response) => {

    const tipo = req.params.tipo;
    const foto = req.params.foto;
    const pathImg = path.join(__dirname,`../uploads/${tipo}/${foto}`)
    
    // imagen por defecto
    if (fs.existsSync(pathImg)) {
        res.sendFile(pathImg);
    }
    else{
        const pathImg = path.join(__dirname,'../uploads/others/nodis.jpg')
        res.sendFile(pathImg);
    }
 }
 
 module.exports = {
    fileUpload,
    retornaImagen
 };