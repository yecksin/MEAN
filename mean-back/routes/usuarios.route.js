//?
//?    Ruta: /api/usuarios
//?

const {Router} = require("express");
const { getUsuarios } = require("../controllers/usuarios.controller");

const router = Router();



router.get('/', getUsuarios);



module.exports = router;