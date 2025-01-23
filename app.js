// Importa o framework Express para criar o servidor
const express = require("express");
const server = express();

// Configura o servidor para interpretar JSON no corpo das requisições
server.use(express.json());

// 0402 - Listagem dos registros
// Utilizamos essa variável para armazenar os dados dos clientes
let customers = [
    { id: 1, name: "Gabriel Dias", site: "https://www.gabrieldias.com/" },
    { id: 2, name: "Google", site: "https://www.google.com/" },
    { id: 3, name: "Outros", site: "https://www.outro.com/" }
];

// Nesta aula mostramos como é feito o "Read" do CRUD (Create, Read, Update e Delete)
// Utilizamos o tipo GET para obter os dados da rota selecionada, que neste caso é /customers
server.get("/customers", (req, res) => {
    // Aqui ele retorna todos os dados da variável customers para mostrar
    return res.json(customers);
});

// Agora vamos fazer o "Show" para exibir apenas um registro específico, utilizando o ID
// Incrementamos no código anterior o seguinte código:
server.get("/customers/:id", (req, res) => {
    // Adicionamos o "/:id" após a rota para que ele busque pelo ID especificado
    const id = parseInt(req.params.id); // Aqui ele recebe o ID solicitado, e o parseInt transforma a string em tipo número
    const customer = customers.find(item => item.id === id); // Nesse momento ele faz uma busca pelo ID que deve ser idêntico
    const status = customer ? 200 : 404; // Aqui ele valida: se o número existir na base de dados, o retorno será 200, senão será 404

    // Aqui ele retorna o resultado, trazendo o status e o customer.
    // Diferente do exemplo anterior, onde retorna todos os dados (plural), aqui ele retorna apenas o dado selecionado (singular), se existir
    return res.status(status).json(customer);
});

// Configura o servidor para escutar na porta 3000
server.listen(3000);
