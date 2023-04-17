const router = require('express').Router()

const usuariosServices=require('./usuarios.services')

router.route('/')
    .get(usuariosServices.getAllUsuarios)
    .post(usuariosServices.postUsuario)

router.route('/:id')
    .get(usuariosServices.getUsuarioById)
    .patch(usuariosServices.patchUsuario)
    .delete(usuariosServices.deleteUsuario)


    module.exports = router