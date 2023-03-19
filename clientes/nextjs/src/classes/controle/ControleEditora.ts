import { Editora } from "../modelo/Editora";

export class ControleEditora {
  editoras: Editora[] = [
    { nome: "Abril", codEditora: 1 },
    { nome: "Veja", codEditora: 2 },
    { nome: "Norte", codEditora: 3 },
    { nome: "Atlas", codEditora: 4 },
  ];

  getNomeEditora(cod: number) {
    return this.editoras.filter((editora) => {
      return editora.codEditora === cod;
    });
  }

  getEditoras() {
    return this.editoras;
  }
}
