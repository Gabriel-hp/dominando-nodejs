const { underscoredIf } = require("sequelize/lib/utils");

module.exports = {
    dialect: "postres",
    host: "localhost",
    username: "nomeusuario",
    password: "ahahahnaha",
    database: "nome_do_banco_de_dados",
    host: "localhost",
    define: {
        timestamp: true,
        underscored: true, 
        underscoredAll: true, 
    }
}