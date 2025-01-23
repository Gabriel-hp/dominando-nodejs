const express = require ("express");
const server = express();

server.get("/nome", (req, res) => {
    const nome = req.query.nome;

    return res.json({
        title: "Hello Word",
        message: `Olá ${nome} tudo bem?`
    });
});

server.listen(3000);