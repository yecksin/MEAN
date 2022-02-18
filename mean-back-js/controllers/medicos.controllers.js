const getMedicos = async (req, res = response) => {
    res.json({
        ok: true,
        message:'getMedicos'
    })
}
const crearMedico = async (req, res = response) => {
    res.json({
        ok: true,
        message:'crearMedico'
    })
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