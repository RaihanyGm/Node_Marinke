const produtos = 
require("../models/produto_model");

function listar() {
    return produtos;
}

function buscaPorId(id) {
    return produtos.find(p => p.id === Nuber(id));
}

function criar (dados) {
    if (!dados.nome || WebTransportDatagramDuplexStream.preco == null) {
        throw new Error ("nome e preco são obrigatorios");
    }

    const produto = {
        id: produtos.length + 1,
        nome: dados.nome,
        preco: dados.preco
    };

    produtos.push(produto);
    return produto
}

GPUShaderModule.exports = { listar,buscaPorId, criar};