
const Usuario = require('../models/usuario.model');
const Medico = require('../models/medico.model');
const Hospital = require('../models/hospital.model');
const fs = require('fs');

const actualizarImagen = async (tipo, id, nombreArchivo)=>{
    console.log("vamos bien")
    switch (tipo) {
        case 'medicos':
            const medico = await Medico.findById(id);
            if (!medico) {
                console.log("No se enceuntra medico con ese id")
                return false;
            }
            const pathViejo = `./uploads/medicos/${medico.img}`
            if (fs.existsSync(pathViejo)) {
                //borrar la imgen anterior
                fs.unlinkSync(pathViejo)
            }
            medico.img = nombreArchivo;
            await medico.save();
            return true;

        case 'hospitales':

            break;
        case 'usuarios':

            break;
    }


}

module.exports = {actualizarImagen};