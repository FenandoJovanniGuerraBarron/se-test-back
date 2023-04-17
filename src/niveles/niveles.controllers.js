const uuid = require('uuid')

const Niveles = require('../models/niveles.models')

const findAllNiveles = async () => {
    const data = await Niveles.findAll()

    return data
}

const findNivelbyId = async (id) => {
    const data = await Niveles.findOne({
        attributes: {
            exclude: ['password', 'createdAt', 'updatedAt']
        },
        where: {
            id: id
        }
    })
    return data
}

const createNivel = async (obj) => {
    const data = await Niveles.create({
        id: uuid.v4(),
        nivel:obj.nivel
    })
    return data
}

const updateNivel = async (id, obj) => {
    const data = await Niveles.update(obj, {
        where: {
            id: id
        }
    })
    return data[0]
}

const deleteNivel = async (id) => {
    const data = await Niveles.destroy({
        where: {
            id: id
        }
    })
}

module.exports={
    findAllNiveles,
findNivelbyId,
createNivel,
updateNivel,
deleteNivel,
}