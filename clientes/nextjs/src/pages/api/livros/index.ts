import { NextApiRequest, NextApiResponse } from "next";
import { ControleLivro } from "@/classes/controle/ControleLivros";
import { Livro } from "@/classes/modelo/Livro";

export const livros = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
  const requestMethod = req.method;

  switch (requestMethod) {
    case "POST":
      const { livro } = JSON.parse(req.body);
      const novoLivro = new Livro(
        livro.codigo,
        livro.editora,
        livro.titulo,
        livro.resumo,
        livro.autores
      );
      livros.incluir(novoLivro);
      res.status(200).json(livros.obterLivros());
      break;

    case "DELETE":
      const { codigo_livro } = JSON.parse(req.body);
      livros.excluir(Number(codigo_livro));
      res.status(200).json(livros.obterLivros());
      break;

    default:
      res.status(200).json(livros.obterLivros());
      break;
  }
};
