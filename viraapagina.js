// Módulo virapagina
const nomeSite = "Vira a Página"
var moment = require("moment");
let fs = require('fs');
const { min } = require("moment"); // ver se precisa mesmo


let db = fs.readFileSync('./db.json'); // Lê um json.
db = JSON.parse(db); // Converse o json em objeto JS


const viraApagina = {
    //função para retornar a data e hora
    dataAgora : () => {
        let data = moment().format("L - LTS")
        return data
    },

    //função que atualiza ambos os bancos de dados
    atualizarBanco : () => {
        //conversão do objeto JS para JSON
        let atualizacao = JSON.stringify(db, null, 2);
        // atualização do arquivo JSON do banco de dados
        fs.writeFileSync('db.json', atualizacao, 'utf-8')
    },

    adicionarUsuario : (novoUsuario) => {
        db.users.push(novoUsuario);
        viraApagina.atualizarBanco();
    },

    adicionarLivro : (novoLivro) => {
        db.livros.push(novoLivro);
        viraApagina.atualizarBanco();
    },

    listarLivros : () => {
        //lista todos os livros cadastrados
        console.log("Estes são os livros cadastrados:")
        db.livros.forEach(livro => {
            let {titulo, autor, edicao, genero, editora} = livro;
            console.log(`Livro: ${titulo}, Autor: ${autor}, ${edicao}ª edição, Gênero: ${genero}, editora: ${editora}`)
        })

    },


    filtrarGenero : genLivro => {
        let filtrados = db.livros.filter(livro => livro.genero === genLivro);
        console.log(`Aqui estão todos os livros do gênero ${genLivro}:`);
        filtrados.forEach(filtrado => {
            console.log(filtrado.titulo);
        });
    }
}

module.exports = viraApagina;