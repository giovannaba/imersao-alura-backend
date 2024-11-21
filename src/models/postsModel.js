import conectarAoBanco from "../config/dbConfig.js";
// Importa a função para conectar ao banco de dados, definida em dbConfig.js.


const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Conecta ao banco de dados usando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO.
// O resultado da conexão é armazenado na constante 'conexao'.


// Função assíncrona para obter todos os posts do banco de dados.
export default async function getTodosPosts(){
    const db = conexao.db('imersao-instabyte')
    // Obtém o banco de dados 'imersao-instabyte' da conexão estabelecida.

    const colecao = db.collection("posts")
    // Obtém a coleção 'posts' dentro do banco de dados.

    return colecao.find().toArray();
    // Executa uma consulta para encontrar todos os documentos (posts) na coleção e retorna os resultados como um array.
};
