const Hospital = require("../models/hospital.model")


const getHospitales = async (req, res = response) => {
    res.json({
        ok: true,
        message:'getHospitales'
    })
}
const crearHospital = async (req, res = response) => {
    const uid = req.uid;

    const hospital = new Hospital({
        ...req.body,
        usuario:uid
    });
 

    try {
        const hospitalDB = await hospital.save();

        res.json({
            ok: true,
            hospital:hospitalDB
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            message:'error inesperado'
        })
    }



}
const actualizarHospital = async (req, res = response) => {
    res.json({
        ok: true,
        message:'actualizarHospital'
    })
}
const borrarHospital = async (req, res = response) => {
    res.json({
        ok: true,
        message:'borrarHospital'
    })
}

module.exports = {
    getHospitales, crearHospital, actualizarHospital, borrarHospital
}