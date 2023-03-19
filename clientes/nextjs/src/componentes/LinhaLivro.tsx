import React, { useEffect, useState } from "react";
import { Livro } from "@/classes/modelo/Livro";
import { Editora } from "@/classes/modelo/Editora";

interface LinhaLivroProps {
  livro: Livro;
  excluir: (cod: number) => Promise<void>;
}

export default function LinhaLivro({ livro, excluir }: LinhaLivroProps) {
  const [editora, setEditora] = useState<string>("");

  async function consultaEditora() {
    const baseURL = "http://localhost:3000/api/editoras";
    const dados = await fetch(baseURL, {
      method: "GET",
    });

    const editoras: Editora[] = await dados.json();
    const retorno = editoras.find(valor => valor.codEditora === livro.editora)

    setEditora(retorno != undefined ? retorno.nome : "Sem cadastro");
  }

  useEffect(() => {
    consultaEditora();
  }, []);

  return (
    <React.Fragment>
      <tr>
        <th scope="row">
          <p>{livro.titulo}</p>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => {
              excluir(livro.codigo);
            }}
          >
            Excluir
          </button>
        </th>
        <td>{livro.resumo}</td>
        <td>
          {editora}
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
}
