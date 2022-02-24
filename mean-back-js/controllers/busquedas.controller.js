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

module.exports = {
    getBusqueda
}