const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  })
  .then(() => console.log("Conexão com o MongoDB estabelecida com sucesso!"))
  .catch((err) => console.error("Erro ao conectar com o MongoDB: " + err));

module.exports = mongoose.connection;
