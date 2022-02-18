//?
//?    Ruta: /api/usuarios
//?

const {Router} = require("express");
const {check} = require('express-validator');
const {  getMedicos, crearMedico, actualizarMedico, borrarMedico} = require("../controllers/medicos.controllers");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
validarCampos
const router = Router();



router.get('/', validarJWT ,getMedicos);

router.post('/', 
    []
 ,crearMedico);

 router.put('/:id',
 []
 ,actualizarMedico);

 router.delete('/:id',validarJWT, borrarMedico);


module.exports = router;