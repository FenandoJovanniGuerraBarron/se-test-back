const nivelesControllers= require('./niveles.controllers')

const getAllNiveles = (req,res)=>{
    nivelesControllers.findAllNiveles()
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(400).json({ message: err.message })
    })
}

const getNivelById = (req,res)=>{
    const id = req.params.id
    nivelesControllers.findNivelbyId(id)
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

const postNivel = (req,res)=>{
   const { nivel} = req.body
   nivelesControllers.createNivel({nivel})
   .then(async(data) => {
    res.status(201).json(data)
})
.catch((err) => {
    res.status(400).json({
        message: err.message, fields: {
            firstName: 'String',
            lastName: 'String',
            password: 'String',
            level:'String'
        }
    })
})
}

const patchNivel=(req,res)=>{
    const id = req.params.id
    const { nivel } = req.body
    nivelesControllers.updateNivel({nivel})
        .then(() => {
            res.status(200).json({ message: 'Your user was edited succesfully!' })
        })
        .catch((err) => {
            res.status(400).json({ message: err.message })
        })
}

const deleteNivel=(req,res)=>{
    const id = req.params.id
    nivelesControllers.deleteNivel(id)
    .then(() => {
        res.status(204).json()
    })
    .catch((err) => {
        res.status(400).json({ message: err.message })
    })
}


module.exports={
    getAllNiveles,
getNivelById,
    postNivel,
    patchNivel,
    deleteNivel

}
