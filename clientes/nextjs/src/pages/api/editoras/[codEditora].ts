import { NextApiRequest, NextApiResponse } from "next";
import { ControleEditora } from "@/classes/controle/ControleEditora";

const editoras = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { codEditora } = req.query;
  res.status(200).json(editoras.getNomeEditora(Number(codEditora)));
};
