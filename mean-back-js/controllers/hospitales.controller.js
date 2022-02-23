const Hospital = require("../models/hospital.model")


const getHospitales = async (req, res = response) => {
    const hospitales = await Hospital.find().populate('usuario','nombre email');
    try {
        res.json({
            ok: true,
            hospitales:hospitales
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            message:'error inesperado'
        })
    }

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