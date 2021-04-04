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
    db.livros.forEach((livro) => {
        let {nome, autor, genero, subgenero, ano} = livro
        console.log(`${nome}, ${autor}, ${genero}, ${subgenero}, ${ano}`)
    })
    //lista todos os livros cadastrados

}

const listarUsuario = () => {
    db.users.forEach((user) => {
        let {nome, idade, favorito} = user
        console.log(`${nome}, ${idade}, ${favorito}`)
    })
    //lista todos os livros cadastrados

}

listarUsuario();

// listarLivros()


// const listarPets2 = () => {
//     petsJSON.pets.forEach((pet) => {
//         let {nome,idade,tipo,raca,vacinado} = pet;
//         console.log(`${nome}, ${idade} anos, ${tipo}, ${raca}, ${(vacinado) ? 'vacinado': 'não vacinado'}`);
    
//         pet.servicos.forEach((servico) => {
//             let {data,tipo} = servico;
//             console.log(`${data} - ${tipo}`);
//         })
//     })
// }

// adicionarUsuario({
//     "nome" : "Luiz",
//     "Idade": "34",
//     "Gênero Favorito" : "Ficção Científica"
    
// });

// adicionarLivro({
//     "nome" : "cem anos de solidão",
//     "autor": "Gabriel García Marquez",
//     "genero" : "Romance",
//     "sub-genero": "Realismo Fantástico",
//     "ano" : 1991
    
// });