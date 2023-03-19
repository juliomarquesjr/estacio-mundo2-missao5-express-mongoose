import { NextApiRequest, NextApiResponse } from "next";
import { ControleEditora } from "@/classes/controle/ControleEditora";

const editoras = new ControleEditora()

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(editoras.getEditoras())
};
