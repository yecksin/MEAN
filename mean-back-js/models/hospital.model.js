const { Schema, model } = require("mongoose");

const HospitalSchema = Schema({
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
        ref: 'Usuario'
    }
},{collection:'hospitales'});

//? cambiar nombre de _id visual
//! solo visual no afecta la bd
HospitalSchema.method('toJSON', function () {
    const {__v,...object} = this.toObject();
    return object
})

module.exports = model('Hospital', HospitalSchema);