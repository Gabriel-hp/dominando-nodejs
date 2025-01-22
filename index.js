const express = require ("express");
const server = express();

server.get("/hello", (req, res) => {
    return res.send("Hello word");
});

server.listen(3000);