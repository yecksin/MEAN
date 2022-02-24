const Usuario = require('../models/usuario.model');
const Medico = require("../models/medico.model")
const Hospital = require("../models/hospital.model")

const getBusqueda = async (req, res = response) => {
   const palabra = req.params.id;
   const regex = new RegExp(palabra,'i')
//    const usuarios = await Usuario.find({nombre: regex});
//    const medicos = await Medico.find({nombre: regex});
//     const hospitales = await Hospital.find({nombre: regex});

    const [usuarios, medicos, hospitales] = await Promise.all([
        Usuario.find({ nombre: regex }),
        Medico.find({ nombre: regex }),
        Hospital.find({ nombre: regex }),
    ])

    try {
        res.json({
            ok: true,
            palabra,
            usuarios,
            medicos,
            hospitales
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: true,
            message:'getBusqueda Error ines'
        })
    }

}

const getDocumentosColeccion= async (req, res = response) => {
    const tabla = req.params.tabla
    const busqueda = req.params.busqueda;
    const regex = new RegExp(busqueda,'i')
 //    const usuarios = await Usuario.find({nombre: regex});
 //    const medicos = await Medico.find({nombre: regex});
 //     const hospitales = await Hospital.find({nombre: regex});
    let data = [];
    switch (tabla) {
        case 'medicos':
            data = await Medico.find({ nombre: regex }).populate('usuario','nombre img').populate('hospital', 'nombre img');

            break;

        case 'hospitales':
            data = await Hospital.find({ nombre: regex }).populate('usuario', 'nombre img')

            break;

        case 'usuarios':
            data = await Usuario.find({ nombre: regex });

            break;

        default:
            res.status(400).json({
                ok: true,
                message: 'Tabla no existe'
            })
            break;
    }

    res.json({
        ok: true,
        resultados:data
    })
  
     try {
         res.json({
             ok: true,
             busqueda,
             usuarios,
             medicos,
             hospitales
         })
     } catch (error) {
         console.log(error)
         res.status(500).json({
             ok: true,
             message:'getBusqueda Error ines'
         })
     }
 
 }
 

module.exports = {
    getBusqueda,
    getDocumentosColeccion
}