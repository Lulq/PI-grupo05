const {response} = require('express');
const express = require('express');
const { listarLivros } = require('./viraApagina.js');
const app = express();
const viraApagina = require('./viraApagina.js')

app.use(express.json())

// Rota para listar os livros
app.get('/livros', (req, res) => {
    return res.send(viraApagina.listarLivros());
});

// Rota para adicionar livros
app.post('/livros', (req, res) => {
    const livro = req.body
    return res.json(viraApagina.adicionarLivro(livro))
});

// Rota para listar os usuários
app.get('/users', (req, res) =>{
    return res.send(viraApagina.listarUsuarios());
});

app.listen(8080, () => {
    console.log('Servidor Rodando!');
});