const {Router} = require("express");
const { login } = require("../controllers/auth.controller");
const {check} = require('express-validator');
const { validarCampos } = require("../middlewares/validar-campos");
const router = Router();




router.post('/',
[
    check('password', 'Obligatorio').not().isEmpty(),
    check('email', 'Obligatorio').isEmail(),
    validarCampos,
],
login
)




module.exports = router;