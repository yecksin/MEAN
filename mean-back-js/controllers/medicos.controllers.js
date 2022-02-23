const Medico = require("../models/medico.model")



const getMedicos = async (req, res = response) => {
    const medicos = await Medico.find().populate('usuario','nombre').populate('hospital','nombre');
    try {
        res.json({
            ok: true,
            message:medicos
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: true,
            message:'getMedicos Error ines'
        })
    }

}
const crearMedico = async (req, res = response) => {
    const uid = req.uid;
    const medico = new Medico({...req.body,usuario:uid})
    console.log(medico)
    try {
        medicoDB = await medico.save();
        res.json({
            ok: true,
            message:medicoDB
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: true,
            message:'getMedicos Error ines'
        })
    }

}
const actualizarMedico = async (req, res = response) => {
    res.json({
        ok: true,
        message:'actualizarMedico'
    })
}
const borrarMedico = async (req, res = response) => {
    res.json({
        ok: true,
        message:'borrarMedico'
    })
}

module.exports = {
    getMedicos, crearMedico, actualizarMedico, borrarMedico
}