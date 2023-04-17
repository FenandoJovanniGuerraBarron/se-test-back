const Usuarios = require('./usuarios.models')
const Niveles = require('./niveles.models')

const initModels = () => {
    Usuarios.belongsTo(Niveles)
    Niveles.hasMany(Usuarios)
}


module.exports = initModels