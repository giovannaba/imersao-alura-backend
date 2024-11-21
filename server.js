import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Gatinho dorminhoco",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gatinho fofinho",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "bolinha de pelo",
        imagem: "https://placecats.com/millie/300/150"
    }
];

const app = express();
app.use(express.json()); 

app.listen(3000, () =>{
    console.log("servidor escutando");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts)
});

function buscaPostPorId(id){
    return posts.findIndex((post) => {
        return post.id == Number(id)
    })
};

app.get("/posts/:id", (req, res) => {
    const index = buscaPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});