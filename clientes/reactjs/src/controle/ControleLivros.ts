import { Livro } from "../modelo/Livro";

const baseUrl = "http://localhost:3030/api/livro";

export class ControleLivro {
  async obterLivros() {
    const dados = await fetch(baseUrl, {
      method: "GET",
    });

    return await dados.json();
  }

  async incluir(livroRecebido: Livro) {
    const novoLivro = {
      codEditora: livroRecebido.codEditora,
      titulo: livroRecebido.titulo,
      resumo: livroRecebido.resumo,
      autores: livroRecebido.autores,
    };

    console.log(novoLivro);

    const dados = await fetch(baseUrl, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoLivro),
    });

    console.log(dados);

    const retorno = await dados.json();

    if (retorno.length > 0) {
      console.log("Livro cadastrado");
    }
  }

  async excluir(codLivro: number) {
    const dados = await fetch(`${baseUrl}/${codLivro} `, {
      method: "DELETE",
    });

    return await dados.json();
  }
}
