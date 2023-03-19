import React, { useEffect, useState } from "react";

import Menu from "@/componentes/Menu";
import LinhaLivro from "@/componentes/LinhaLivro";
import { Livro } from "@/classes/modelo/Livro";

import styles from "../styles/Home.module.css";

const baseURL = "http://localhost:3000/api/livros";

export default function LivroLista() {
  async function obter() {
    const dados = await fetch(baseURL, {
      method: "GET",
    });

    const retorno: Livro[] = await dados.json();
    setMeusLivros(retorno);
  }

  const [meusLivros, setMeusLivros] = useState<Livro[]>([
    {
      titulo: "Sem dados",
      editora: 1,
      codigo: 1,
      resumo: "Sem dados",
      autores: ["Nao tem"],
    },
  ]);
  const [carregando, setCarregando] = useState<boolean>(false);

  /* EM DESENVOLVIMENTO */
  const excluirLivro = async (cod: number) => {
    /* console.log("Código Recebido: " + cod); */
    const baseURL = "http://localhost:3000/api/livros";
    const dados = await fetch(baseURL, {
      method: "DELETE",
      body: JSON.stringify({ codigo_livro: cod }),
    });

    setCarregando(true);

    console.log(dados);
  };
  /* EM DESENVOLVIMENTO */

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
                  key={livro.codigo}
                  livro={livro}
                  excluir={excluirLivro}
                />
              );
            })}
          </tbody>
        </table>
      </main>
    </React.Fragment>
  );
}
