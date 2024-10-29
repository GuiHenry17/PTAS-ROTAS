const port = 3000
const express = require('express')
const app = express()
const pages = require('./routes/rotas')

app.use('/', pages)

app.listen(port, () => {
    console.log('Servidor Rodando')
})