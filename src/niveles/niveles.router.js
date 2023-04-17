const router = require('express').Router()

const nivelesServices=require('./niveles.services')

router.route('/')
    .get(nivelesServices.getAllNiveles)
    .post(nivelesServices.postNivel)

router.route('/:id')
    .get(nivelesServices.getNivelById)
    .patch(nivelesServices.patchNivel)
    .delete(nivelesServices.deleteNivel)

    module.exports = router