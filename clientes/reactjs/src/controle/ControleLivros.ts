import { Livro } from "../modelo/Livro";

export class ControleLivro {
  private livros: Livro[] = [
    {
      codigo: 1,
      codEditora: 2,
      titulo: "O Código Da Vinci (2003)",
      resumo:
        "Quando um curador do museu do Louvre é assassinado, Langdon se vê envolvido em uma complexa trama cheia de enigmas que o leva a desvendar um dos principais segredos da humanidade.",
      autores: ["Dan Brown"],
    },
    {
      codigo: 2,
      codEditora: 1,
      titulo: "O Pequeno Príncipe (1943)",
      resumo:
        "Um dos maiores clássicos infantis foi escrito e ilustrado pelo autor Antoine de Saint-Exupéry quando se encontrava exilado na América do Norte durante a II Guerra Mundial. Muito da vida do autor como aviador pode ser identificada no livro.",
      autores: ["Antoine de Saint-Exupéry"],
    },
    {
      codigo: 3,
      codEditora: 1,
      titulo: "Dom Quixote (1612)",
      resumo:
        "Escrito em uma época em que os romances de cavalaria se encontravam em declínio, Miguel de Cervantes inspirou-se nisto para criar as aventuras de um homem louco que acreditava viver nesse mundo fantástico. Sem dúvidas, uma obra prima.",
      autores: ["Miguel de Cervantes"],
    },
  ];

  obterLivros() {
    return this.livros;
  }

  incluir(livroRecebido: Livro) {
    const codigoMaisAlto = this.livros.reduce((codAtual, livroAtual) => {
      return codAtual > livroAtual.codigo ? codAtual : livroAtual.codigo;
    }, 0);

    livroRecebido.codigo = codigoMaisAlto + 1;
    this.livros.push(livroRecebido);
  }

  excluir(codLivro: number) {
    const index = this.livros.findIndex((livro) => livro.codigo === codLivro);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
