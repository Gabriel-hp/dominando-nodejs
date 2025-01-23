const express = require ("express");
const server = express();

server.get("/home/:nome", (req, res) => {
    const nome = req.params.nome;

    return res.json({
        title: "Hello Word",
        message: `Olá ${nome} tudo bem?`
    });
});

server.listen(3000);