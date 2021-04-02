const nomeSite = "A definir"
var moment = require("moment");
let fs = require('fs');
const { min } = require("moment"); // ver se precisa mesmo

let db = fs.readFileSync('./db-livros.json'); // lê um arquivo json que contem informações sobre os livros cadastrados

db = JSON.parse(db);

const dataAgora = () => {
    let data = moment().format("L - LTS")
    return data
};

const atualizarBanco = () => {
    //conversão do objeto JS para JSON
    let livrosAtualizados = JSON.stringify(db, null, 2);
    // atualização do arquivo JSON do banco de dados
    fs.writeFileSync('db-pets.json', livrosAtualizados, 'utf-8') // os parâmetros são o arquivo onde vai ser salvo, o que vai ser salvo nele, e a codificação do texto
};

const listarLivros = () => {
    //lista todos os livros cadastrados
}