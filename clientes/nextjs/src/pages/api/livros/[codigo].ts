import { NextApiRequest, NextApiResponse } from "next";
import { livros } from "./index";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { codigo } = req.query;
  res.status(200).json(livros.getNomeLivro(Number(codigo)));
};
