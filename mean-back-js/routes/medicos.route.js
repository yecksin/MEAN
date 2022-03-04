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
    [
    validarJWT,
    check('nombre',"El nombre del medico es requerido").not().isEmpty(),
    check('hospital',"El hospital id debe ser valido").isMongoId(),
    validarCampos
    ],
    crearMedico);

 router.put('/:id',
 [
    validarJWT,
    check('nombre',"El nombre del medico es requerido").not().isEmpty(),
    check('hospital',"El hospital id debe ser valido").isMongoId(),
    validarCampos
 ]
 ,actualizarMedico);

 router.delete('/:id',validarJWT, borrarMedico);


module.exports = router;