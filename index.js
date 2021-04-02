const nomeSite = "A definir"
var moment = require("moment");
let fs = require('fs');
const { min } = require("moment"); // ver se precisa mesmo


let dbLivros = fs.readFileSync('./db.json'); // Lê um json.
dbLivros = JSON.parse(dbLivros); // Converse o json em objeto JS

// Carrega o banco de dados de usuários
let dbUsers = fs.readFileSync('./db-users.json');
dbUsers = JSON.parse(dbUsers);

// Caminhos - facilita a ação da função atualizarBanco, tornando ela multifuncional (pode atualizar ambos os bancos de dado de acordo com o parâmetro passado)
livros = ['db-livros.json', dbLivros];
usuarios = ['db-users.json', dbUsers];

//função para retornar a data e hora
const dataAgora = () => {
    let data = moment().format("L - LTS")
    return data
};

//função que atualiza ambos os bancos de dados
const atualizarBanco = (banco) => {
    //conversão do objeto JS para JSON
    let atualizacao = JSON.stringify(banco[1], null, 2);
    // atualização do arquivo JSON do banco de dados
    fs.writeFileSync(banco[0], atualizacao, 'utf-8') // os parâmetros são o arquivo onde vai ser salvo, o que vai ser salvo nele, e a codificação do texto
};

const adicionarUsuario (novoUsuario) => {
    db.users.push(novoUsuario)
    atualizarBanco();
};

const adicionarLivro {};

const listarLivros = () => {
    //lista todos os livros cadastrados

}