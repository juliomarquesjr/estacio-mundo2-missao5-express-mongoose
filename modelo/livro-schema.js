const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const LivroSchema = new Schema({
  id: ObjectId,
  titulo: String,
  resumo: String,
  codEditora: Number,
  autores: [String],
});

const LivroModel = mongoose.model("Livros", LivroSchema);
module.exports = LivroModel;
