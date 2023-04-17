const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Niveles= db.define('niveles',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    nivel: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

module.exports = Niveles