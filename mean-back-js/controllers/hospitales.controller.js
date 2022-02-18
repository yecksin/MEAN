const getHospitales = async (req, res = response) => {
    res.json({
        ok: true,
        message:'getHospitales'
    })
}
const crearHospital = async (req, res = response) => {
    res.json({
        ok: true,
        message:'crearHospital'
    })
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