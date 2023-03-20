import React, { useEffect, useState } from "react";
import { Livro } from "@/classes/modelo/Livro";
import { Editora } from "@/classes/modelo/Editora";

interface LinhaLivroProps {
  livro: Livro;
  setCarregando: React.Dispatch<React.SetStateAction<boolean>>
}



export default function LinhaLivro({ livro, setCarregando }: LinhaLivroProps) {
  const [editora, setEditora] = useState<string>("");

  async function excluirLivro(cod: Number) {
    const baseURL = "http://localhost:3030/api/livro";
    const dados = await fetch(`${baseURL}/${cod}`, {
      method: "DELETE",
    });

    console.log(dados)
    setCarregando(true);
  };

  async function consultaEditora() {
    const baseURL = "http://localhost:3000/api/editoras";
    const dados = await fetch(baseURL, {
      method: "GET",
    });

    const editoras: Editora[] = await dados.json();
    const retorno = editoras.find(valor => valor.codEditora === livro.codEditora)
    console.log(livro.codEditora)

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
              excluirLivro(livro._id)
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
