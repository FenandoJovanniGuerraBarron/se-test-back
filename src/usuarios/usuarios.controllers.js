const uuid = require('uuid')

const Usuarios = require('../models/usuarios.models')

const findAllUuarios = async () => {
    const data = await Usuarios.findAll()

    return data
}

const findUsuariobyId = async (id) => {
    const data = await Usuarios.findOne({
        attributes: {
            exclude: ['password', 'createdAt', 'updatedAt']
        },
        where: {
            id: id
        }
    })
    return data
}

const createUserio = async (obj) => {
    const data = await Usuarios.create({
        id: uuid.v4(),
        firstName: obj.firstName,
        lastName: obj.lastName,
        password: obj.password,
        niveleId: obj.niveleId
    })
    return data
}

const updateUsuario = async (id, obj) => {
    const data = await Usuarios.update(obj, {
        where: {
            id: id
        }
    })
    return data[0]
}


const deleteUsuario = async (id) => {
    const data = await Usuarios.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    findAllUuarios,
    findUsuariobyId,
    createUserio,
    updateUsuario,
    deleteUsuario
}