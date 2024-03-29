const { Schema, model } = require("mongoose");

const MedicoSchema = Schema({
    nombre:{
        type: String,
        require: true,
        unique: true
    },
    img:{
        type: String
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required:true
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
        required:true
    }
},{collection:'medicos'});

//? cambiar nombre de _id visual
//! solo visual no afecta la bd
MedicoSchema.method('toJSON', function () {
    const {__v,...object} = this.toObject();
    return object
})

module.exports = model('Medico', MedicoSchema);