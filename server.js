const express = require('express') // Módulo express
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')

const routes = require('./routes') // Archivo local: routes.js

require('dotenv').config()

const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.PASSWORD,
    database: 'punto_venta'
}

// Middlewares (ni idea de qué es esto)
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

// Rutas ***********************************************************************
app.get('/', (req, res)=> {
    res.send('Bienvenido a mi proyecto')
})

app.use('/api', routes)

// Correr el servidor **********************************************************
// Soporta hot-reloading, por lo que los cambios se verán en tiempo de ejecución
// cmd: npm run start
// mysql shell: \c root@localhost:3306
app.listen(app.get('port'), ()=> {
    console.log('Servidor corriendo en el puerto: ', app.get('port'))
}) 

// https://www.youtube.com/watch?v=fW-4toNg3jw&list=LL&index=4
// Minuto: 