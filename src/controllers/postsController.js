import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res){
    const posts =  await getTodosPosts();
    // Chama a função getTodosPosts() para obter todos os posts do banco de dados.
    
    res.status(200).json(posts);
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.
}

