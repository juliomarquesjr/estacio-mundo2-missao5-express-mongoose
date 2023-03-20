import React, { useState, useEffect } from "react";
import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";

import { Livro } from "./modelo/Livro";
import Menu from "./Menu";

type PropsLinhaLivro = {
  livro: Livro;
  carregando: React.Dispatch<React.SetStateAction<boolean>>;
};

type Props = {
  livros: ControleLivro;
};

const controleLivros = new ControleLivro();

const LinhaLivro = ({livro, carregando }: PropsLinhaLivro) => {
  const editora = new ControleEditora();

  return (
    <React.Fragment>
      <tr>
        <th scope="row">
          <p>{livro.titulo}</p>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => {
              controleLivros.excluir(livro._id);
              carregando(true);
            }}
          >
            Excluir
          </button>
        </th>
        <td>{livro.resumo}</td>
        <td>
          {editora.getNomeEditora(livro.codEditora).map((nomeEditora) => {
            return nomeEditora.nome;
          })}
        </td>
        <td>
          <ul>
            {livro.autores.map((nome) => {
              return <li>{nome}</li>;
            })}
          </ul>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default function LivroLista({ livros }: Props) {
  const [meusLivros, setMeusLivros] = useState<Livro[]>([
    {
      _id: 1,
      codEditora: 1,
      titulo: "Sem cadastro",
      resumo: "Sem cadastro",
      autores: ["Sem cadastro"],
    },
  ]);
  const [carregando, setCarregando] = useState<boolean>(false);

  async function obter() {
    const retorno = await controleLivros.obterLivros();
    setMeusLivros(retorno.acervo);
  }

  useEffect(() => {
    obter();
    setCarregando(false);
  }, [carregando]);

  return (
    <React.Fragment>
      <Menu />
      <main className="container">
        <h1>Catalogo de Livros</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Título</th>
              <th scope="col">Resumo</th>
              <th scope="col">Editora</th>
              <th scope="col">Autores</th>
            </tr>
          </thead>
          <tbody>
            {meusLivros.map((livro) => {
              return (
                <LinhaLivro
                  key={livro._id}
                  livro={livro}
                  carregando={setCarregando}
                />
              );
            })}
          </tbody>
        </table>
      </main>
    </React.Fragment>
  );
}
