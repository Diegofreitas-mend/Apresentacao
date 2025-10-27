const express = require("express"); // importa o módulo express neste arquivo
const app = express(); // iniciando o express

// rota inicial
app.get("/", (req, res) => {
  res.send("<h1>Start</h1>");
});

// rota do cadastro de elementos
app.get("/elementos", (req, res) => {
  res.send("<h1>Lista de elementos!</h1>");
});

// rota com parâmetro obrigatório
app.get("/consulta/:parametro", (req, res) => {
  res.send("retorno consulta: " + req.params.parametro);
});

// rota com parâmetro opcional
app.get("/cadastro/:nome?", (req, res) => {
  const nome = req.params.nome;
  if (nome) {
    res.send("<h1>Elemento " + nome + " criado!</h1>");
  } else {
    res.send("Elemento criado!");
  }
});

// inicia o servidor
app.listen(process.env.PORT ?? 3000, (erro) => {
  if (erro) {
    console.log("Erro ao iniciar o servidor.");
  } else {
    console.log("Servidor iniciado na porta " + (process.env.PORT ?? 3000));
  }
});
