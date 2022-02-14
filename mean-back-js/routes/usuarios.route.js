//?
//?    Ruta: /api/usuarios
//?

const {Router} = require("express");
const {check} = require('express-validator')
const { getUsuarios, crearUsuario } = require("../controllers/usuarios.controller");
const { validarCampos } = require("../middlewares/validar-campos");
validarCampos
const router = Router();



router.get('/', getUsuarios);
router.post('/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'Obligatorio').not().isEmpty(),
        check('email', 'Obligatorio').isEmail(),
        validarCampos,

    ]
 ,crearUsuario);


module.exports = router;