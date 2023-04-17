const express = require('express')
const cors = require('cors')

const config = require('../config')
const db = require('./utils/database')
const initModels = require('./models/initModels')
const usuarioRouter = require('./usuarios/usuarios.router')
const levelRouter = require('./niveles/niveles.router')

const app = express()
app.use(express.json())
app.use(cors())

db.authenticate()
    .then(() => console.log('Database Authenticated'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database Synced'))
    .catch(err => console.log(err))

    initModels()

app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Ok!',
        routes: {
            users: ""
        }
    })
})

app.use('/api/v1/users',usuarioRouter)
app.use('/api/v1/levels',levelRouter )


app.listen(config.api.port, () => {
    console.log(`Server started on ${config.api.host}`)
})