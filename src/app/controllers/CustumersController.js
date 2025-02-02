let customers = [
    { id: 1, name: "Gabriel Dias", site: "https://www.gabrieldias.com/" },
    { id: 2, name: "Google", site: "https://www.google.com/" },
    { id: 3, name: "Outros", site: "https://www.outro.com/" }
];

class CustumersController{

    //listagem
    index(req, res){
        return res.json(customers);
    }
    //visualização
    show(req, res){
             // Adicionamos o "/:id" após a rota para que ele busque pelo ID especificado
            const id = parseInt(req.params.id); // Aqui ele recebe o ID solicitado, e o parseInt transforma a string em tipo número
            const customer =customers.find(item => item.id === id); // Nesse momento ele faz uma busca pelo ID que deve ser idêntico
            const status = customer ? 200 : 404; // Aqui ele valida: se o número existir na base de dados, o retorno será 200, senão será 404

            // Aqui ele retorna o resultado, trazendo o status e o customer.
            // Diferente do exemplo anterior, onde retorna todos os dados (plural), aqui ele retorna apenas o dado selecionado (singular), se existir
            return res.status(status).json(customer);
    }
    // cria
    create(req, res){

        const { name, site} = req.body;    // essa variavel informa qual o dados serão inserido que é o nome e o site o body é o tipo de dado usado paa depois ser manipulado com json
        const id =customers[customers.length - 1].id + 1; // aqui é para adcionar o id como estamos fazendo sem banco de dados o id é incremetado com essa logica que ela pega o ultmi da lista e adciona +1

        const newCustomer = { id, name, site}; // nesse momento ele cria o novo dado inserido com o id, nome e site
        customers.push(newCustomer); // e aqui ele adciona no nosso "banco de dados"

        return res.status(201).json(newCustomer); // aqui ele tras o status 201 que é o status de inserção e mostra também o nodo dado inserido newCustomer

        
    }
    //atualiza
    update(req, res){
        const id = parseInt(req.params.id); // Aqui ele recebe o ID solicitado, e o parseInt transforma a string em tipo número
        const { name, site} = req.body;    // essa variavel informa qual o dados serão inserido que é o nome e o site o body é o tipo de dado usado paa depois ser manipulado com json
    
        const index =customers.findIndex(item => item.id === id); // aqui ele faz a busca pelo id para atualizar
        const status = index >= 0 ? 200 : 404; // aqui é uma tratativa se o id não existir ele retorna o erro 
    
        if(index >= 0){
           customers[index] = { id: parseInt(id), name, site }; // aqui é o momento que é feio a edição 
        }
        return res.status(status).json(customers[index]); // aqui ele tras o status e a o novo dado alterado
    
    }
    //deleta
    destroy(req, res){
        const id = parseInt(req.params.id); // Aqui ele recebe o ID solicitado, e o parseInt transforma a string em tipo número
        const index =customers.findIndex(item => item.id === id); // aqui ele faz a busca pelo id para excluir
        const status = index >= 0 ? 200 : 404; // aqui é uma tratativa se o id não existir ele retorna o erro 
    
        if(index >= 0){
           customers.splice(index, 1); // nesse momento ele faz a exclusão do dado selecionando e esse 1 é para informar quatdos dados são fetados
        }
    
        return res.status(status).json(); // aqui ele tras o status e a o novo dado alterado    
        
    }
}

export default new CustumersController();