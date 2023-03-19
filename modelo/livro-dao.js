const LivroModel = require("./livro-schema");

class LivroController {
  async obterLivros(req, res) {
    const acervo = await LivroModel.find();
    return res.status(200).json({ acervo });
  }

  async incluir(req, res) {
    const novoLivro = await LivroModel.create(req.body);
    return res.status(200).json(novoLivro);
  }

  async excluir(req, res) {
    const { id } = req.params;

    try {
      const livroRemover = await LivroModel.findByIdAndDelete(id);
      if (!livroRemover) {
        res.status(404).json({ mensagem: "Livro não encontrado" });
      }

      return res.status(200).json({ mensagem: "Livro removido" });
    } catch (error) {
      res.status(404).json({ mensagem: "Falha ao realizar a remoção" });
    }
  }

  async mostrarLivro(req, res) {
    const { id } = req.params;
    const livro = await LivroModel.findById(id);

    if (!livro) {
      return res.status(404).json({ messagem: "Não localizado" });
    }

    return res.status(200).json({ livro });
  }
}

module.exports = new LivroController();
