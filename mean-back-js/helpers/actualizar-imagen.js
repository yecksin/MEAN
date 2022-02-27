
const Usuario = require('../models/usuario.model');
const Medico = require('../models/medico.model');
const Hospital = require('../models/hospital.model');
const fs = require('fs');

const borrarImagen = (path)=>{

    if (fs.existsSync(path)) {
        //borrar la imgen anterior
        fs.unlinkSync(path)
    }
}

const actualizarImagen = async (tipo, id, nombreArchivo)=>{
    
    switch (tipo) {
        
        case 'medicos':
            const medico = await Medico.findById(id);
            console.log(medico)
            if (!medico) {
                console.log("No se enceuntra medico con ese id")
                return false;
            }
            var pathViejo = `./uploads/medicos/${medico.img}`
            borrarImagen(pathViejo);
            medico.img = nombreArchivo;
            await medico.save();
            return true;

        case 'hospitales':
            const hospital = await Hospital.findById(id);
            if (!hospital) {
                console.log("No se enceuntra medico con ese id")
                return false;
            }
            var pathViejo = `./uploads/medicos/${hospital.img}`
            borrarImagen(pathViejo);
            hospital.img = nombreArchivo;
            console.log("actuaizar hospitales")
            await hospital.save();
            return true;
        case 'usuarios':
           const usuario = await Usuario.findById(id);
            if (!usuario) {
                console.log("No se enceuntra medico con ese id")
                return false;
            }
            var pathViejo = `./uploads/medicos/${usuario.img}`
            borrarImagen(pathViejo);
            usuario.img = nombreArchivo;
            await hospital.save();
            return true;
        }

}

module.exports = {actualizarImagen};