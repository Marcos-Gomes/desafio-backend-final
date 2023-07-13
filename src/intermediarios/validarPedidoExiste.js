const knex = require("../conexao");

const validarPedidoExiste = async (req, res, next) => {
  const { cliente_id } = req.query;

  if (cliente_id) {
    const pedidoExiste = await knex("pedidos").where("id", cliente_id).first();

    if (!pedidoExiste) {
      return res.status(404).json({
        mensagem: "O pedido solicitado não existe em nossa base de dados",
      });
    }
  }
  next();
};

module.exports = validarPedidoExiste;
