const usuariosControllers = require('./usuarios.controllers')

const getAllUsuarios = (req,res)=>{
    usuariosControllers.findAllUuarios()
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(400).json({ message: err.message })
    })
}

const getUsuarioById = (req,res)=>{
    const id = req.params.id
    usuariosControllers.findUsuariobyId(id)
    .then((data) => {
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json({ message: 'Invalid ID' })
        }
    })
    .catch((err) => {
        res.status(400).json({ message: err.message })
    })
}

const postUsuario = (req,res)=>{
   const { firstName, lastName, password, niveleId} = req.body
   usuariosControllers.createUserio({ firstName, lastName, password, niveleId})
   .then(async(data) => {
    res.status(201).json(data)
})
.catch((err) => {
    res.status(400).json({
        message: err.message, fields: {
            firstName: 'String',
            lastName: 'String',
            password: 'String',
            niveleId:'String'
        }
    })
})
}

const patchUsuario=(req,res)=>{
    const id = req.params.id
    const { firstName, lastName, password, niveleId } = req.body
    usuariosControllers.updateUsuario(id, { firstName, lastName, password, niveleId })
        .then(() => {
            res.status(200).json({ message: 'Your user was edited succesfully!' })
        })
        .catch((err) => {
            res.status(400).json({ message: err.message })
        })
}

const deleteUsuario=(req,res)=>{
    const id = req.params.id
    usuariosControllers.deleteUsuario(id)
    .then(() => {
        res.status(204).json()
    })
    .catch((err) => {
        res.status(400).json({ message: err.message })
    })
}


module.exports={
    getAllUsuarios,
getUsuarioById,
postUsuario,
patchUsuario,
deleteUsuario,
}