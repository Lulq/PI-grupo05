const nomeSite = "A definir"
var moment = require("moment");
let fs = require('fs');
const { min } = require("moment"); // ver se precisa mesmo


let db = fs.readFileSync('./db.json'); // Lê um json.
db = JSON.parse(db); // Converse o json em objeto JS

//função para retornar a data e hora
const dataAgora = () => {
    let data = moment().format("L - LTS")
    return data
};

//função que atualiza ambos os bancos de dados
const atualizarBanco = () => {
    //conversão do objeto JS para JSON
    let atualizacao = JSON.stringify(db, null, 2);
    // atualização do arquivo JSON do banco de dados
    fs.writeFileSync('db.json', atualizacao, 'utf-8')
};

const adicionarUsuario = (novoUsuario) => {
    db.users.push(novoUsuario);
    atualizarBanco();
};

const adicionarLivro = (novoLivro) => {
    db.livros.push(novoLivro);
    atualizarBanco();
};

const listarLivros = () => {
    //lista todos os livros cadastrados

}

// adicionarUsuario({
//     "nome" : "Luiz",
//     "Idade": "34",
//     "Gênero Favorito" : "Ficção Científica"
    
// });

adicionarLivro({
    "nome" : "O mundo de Sofia",
    "autor": "Jostein Gaarder",
    "genero" : "Romance",
    "sub-genero": "Filosofia",
    "ano" : 1991
    
});