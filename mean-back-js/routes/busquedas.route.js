const {Router} = require("express");
const {check} = require('express-validator');
const { getBusqueda,getDocumentosColeccion } = require("../controllers/busquedas.controller");

const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
validarCampos
const router = Router();



router.get('/:id', validarJWT ,getBusqueda);
router.get('/coleccion/:tabla/:busqueda', validarJWT ,getDocumentosColeccion);
module.exports = router;