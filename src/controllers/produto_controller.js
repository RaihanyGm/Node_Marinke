const service =require("../services/produto_service");

exports.listar = (req, res) => {
    const produtos = service.listar();
    res.status(200).json(produtos);
};

exports.buscarPorId = (req, res) => {
    const produtos = service.buscarPorId(req.params.id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }
    res.status(200).json(produtos);
};

exports.criar = (req, res) => {
    try {
        const produto = service.criar(req, body);
        res.status(200).json(produtos);
    } catch(error) {
        return res.status(404).json({ mensagem: error.messagem});
    }
};