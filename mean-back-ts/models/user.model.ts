import { Schema, model } from "mongoose";

const UsuarioSchema = new Schema({
    nombre:{
        type: String,
        require: true,
        unique: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        required: true
    },
    img:{
        type: String
    },
    role:{
        type: String,
        required: true,
        default: 'USER_ROLE'
    },
    google: {
        type: Boolean,
        default: false
    }
});

// // cambiar nombre de _id visual
// // solo visual no afecta la bd
// UsuarioSchema.method('toJSON', function () {
//     const {__v, _id, ...object} = this.toObject();
//     object.uid = _id;
//     // object.
//     return object
// })

export default model('Usuario', UsuarioSchema);