module.exports = {
    dialect: "postgres", // Corrigido de "postres" para "postgres"
    host: "localhost",
    username: "postgres", // Corrigido de "postres" para "postgres"
    password: "1234",
    database: "back_node",
    define: {
        timestamps: true, // Corrigido de "timestamp" para "timestamps"
        underscored: true, 
        underscoredAll: true, 
    }
};
