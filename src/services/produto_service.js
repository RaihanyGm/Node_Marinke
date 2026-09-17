const produtos = 
    require("../models/produto_model");

function listar() {
    return produtos;
}

function buscaPorId(id) {
    return produtos.find(p => p.id === Nuber(id));
}

function criar (dados) {
   const produto = new Produto({
    id: produtos.length + 1,
    nome: dados.nome,
    preco: dados.preco
});
    }

    produtos.push(produto);
    return produto;

module.exports = { listar, buscaPorId, criar};