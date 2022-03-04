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
    const id = req.params.id;
    const uid = req.uid;

    try {
        const hospital = await Hospital.findById(id)
        console.log(hospital)

        if (!hospital) {
            res.json.status(404)({
                ok: true,
                message:'No se encuentra'
            })
        }

        const cammbiosHospital = {
            ...req.body,
            usuario:uid
        }

        const hospitalActualizado = await Hospital.findByIdAndUpdate(id, cammbiosHospital, {new:true})

        res.json({
            ok: true,
            message:'actualizarHospital',
            hospitalActualizado
        })
    } catch (error) {
        res.json.status(500)({
            ok: true,
            message:'Error'
        })
    }


}

const borrarHospital = async (req, res = response) => {
    const id = req.params.id;
    console.log(id)
    try {
        const hospital = await Hospital.findById(id)
        console.log(hospital)

        if (!hospital) {
            res.json.status(404)({
                ok: true,
                message:'No se encuentra'
            })
        }

        await Hospital.findByIdAndDelete(id)


        res.json({
            ok: true,
            message:'Hospital eliminado'
            
        })
    } catch (error) {
        res.json.status(500)({
            ok: true,
            message:'Error'
        })
    }
}

module.exports = {
    getHospitales, crearHospital, actualizarHospital, borrarHospital
}