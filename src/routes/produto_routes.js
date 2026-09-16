const express = require ("express");
const produto_routes = express.Router();

const controller =
    require("../controllers/produto.controller");

produto_routes.get("/", controller.listar);
produto_routes.get("/:id", controller.buscarPorId);
produto_routes.post("/", controller.criar);

module.exports = produto_routes;