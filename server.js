const express = require('express')
const app = express()
const registrado = 'Registrado com sucesso'

app.get('/', (req, res) => {
    res.send('Servidor Rodando')
})

app.get('/aula', (req, res) => {
    res.send('Aula Acontecendo')
})

app.get('/registrar', (req, res) => {
    res.send('Informe suas informações: <br><br> EMAIL: <input/><br><br> SENHA: <input/> <br><br> <button>Registrar</button>')
})

app.get('/login', (req, res) => {
    res.send('Informe suas informações: <br><br> EMAIL: <input/><br><br> SENHA: <input/> <br><br> <button>Entrar</button>')
})

app.get('/admin', (req, res) => {
    res.send('<h1>Error 403</h1><h1>Página Administrativa (SEM ACESSO)</h1>')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Servidor Rodando')
})