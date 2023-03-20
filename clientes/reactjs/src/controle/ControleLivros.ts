import { Livro } from "../modelo/Livro";

const baseUrl = "http://localhost:3030/api/livro";

export class ControleLivro {

  async obterLivros() {
    const dados = await fetch(baseUrl, {
      method: "GET",
    });

    return await dados.json();
  }

  incluir(livroRecebido: Livro) {

  }

  async excluir(codLivro: number) {
    const dados = await fetch(`${baseUrl}/${codLivro} `, {
      method: "DELETE",
    });

    return await dados.json();
  }
}
