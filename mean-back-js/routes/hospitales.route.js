//?
//?    Ruta: /api/usuarios
//?

const {Router} = require("express");
const {check} = require('express-validator');
const {  getHospitales, crearHospital, actualizarHospital, borrarHospital} = require("../controllers/hospitales.controller");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
validarCampos
const router = Router();



router.get('/', validarJWT ,getHospitales);

router.post('/', 
    []
 ,crearHospital);

 router.put('/:id',
 []
 ,actualizarHospital);

 router.delete('/:id',validarJWT, borrarHospital);


module.exports = router;