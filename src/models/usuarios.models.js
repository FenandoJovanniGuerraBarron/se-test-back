const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Niveles = require('./niveles.models')

const Usuarios= db.define('usuarios',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 50]
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len : [2, 50]
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    niveleId:{
        type:DataTypes.UUID,
        references:{
            key:'id',
            model: Niveles
        }
    }
})

module.exports = Usuarios