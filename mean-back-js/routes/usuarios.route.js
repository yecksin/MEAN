//?
//?    Ruta: /api/usuarios
//?

const {Router} = require("express");
const {check} = require('express-validator')
const { getUsuarios, crearUsuario,actualizarUsuario, borrarUsuario } = require("../controllers/usuarios.controller");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
validarCampos
const router = Router();



router.get('/', validarJWT ,getUsuarios);

router.post('/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'Obligatorio').not().isEmpty(),
        check('email', 'Obligatorio').isEmail(),
        validarCampos,

    ]
 ,crearUsuario);

 router.put('/:id',
 [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'Obligatorio').isEmail(),
    check('role', 'Obligatorio').not().isEmpty(),
    validarCampos,

]
 ,actualizarUsuario);

 router.delete('/:id',validarJWT, borrarUsuario);


module.exports = router;