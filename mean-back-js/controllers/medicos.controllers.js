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
    const id = req.params.id;
    const uid = req.uid;

    try {
        const medico = await Medico.findById(id)
        console.log(medico)

        if (!medico) {
            res.json.status(404)({
                ok: true,
                message:'No se encuentra'
            })
        }

        const cammbiosMedico = {
            ...req.body,
            usuario:uid
        }

        const medicoActualizado = await Medico.findByIdAndUpdate(id, cammbiosMedico, {new:true})

        res.json({
            ok: true,
            message:'medicoActualizado',
            medicoActualizado
        })
    } catch (error) {
        res.json.status(500)({
            ok: true,
            message:'Error'
        })
    }
}
const borrarMedico = async (req, res = response) => {
    const id = req.params.id;
    console.log(id)
    try {
        const medico = await Medico.findById(id)
        console.log(medico)

        if (!medico) {
            res.json.status(404)({
                ok: true,
                message:'No se encuentra'
            })
        }

        await Medico.findByIdAndDelete(id)


        res.json({
            ok: true,
            message:'Medico eliminado'
            
        })
    } catch (error) {
        res.json.status(500)({
            ok: true,
            message:'Error'
        })
    }
}

module.exports = {
    getMedicos, crearMedico, actualizarMedico, borrarMedico
}