const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./src/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Adiciona o middleware 'cors' para habilitar o CORS
app.use(cors());

// Configuração do servidor Express para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));
// Utiliza as rotas definidas no arquivo 'routes/index.js'
app.use(routes);

// Rota padrão para servir o arquivo HTML inicial
app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
