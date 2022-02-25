const {Router} = require("express");
const { fileUpload } = require("../controllers/uploads.controller");
const { validarJWT } = require("../middlewares/validar-jwt");
const expressfileUpload = require('express-fileupload');

const router = Router();


router.use(expressfileUpload());
router.put('/:tipo/:id', validarJWT ,fileUpload);
module.exports = router;