import React, { useEffect, useState } from "react";

import Menu from "@/componentes/Menu";
import LinhaLivro from "@/componentes/LinhaLivro";
import { Livro } from "@/classes/modelo/Livro";

import styles from "../styles/Home.module.css";

const baseURL = "http://localhost:3030/api/livro";

export default function LivroLista() {
  async function obter() {
    const dados = await fetch(baseURL, {
      method: "GET",
    });

    const retorno = await dados.json();
    setMeusLivros(retorno.acervo);
  }

  const [meusLivros, setMeusLivros] = useState<Livro[]>([
    {
      _id: 1,
      titulo: "Sem dados",
      editora: 1,
      resumo: "Sem dados",
      autores: ["Nao tem"],
    },
  ]);
  const [carregando, setCarregando] = useState<boolean>(false);

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
                  setCarregando={setCarregando}
                />
              );
            })}
          </tbody>
        </table>
      </main>
    </React.Fragment>
  );
}
