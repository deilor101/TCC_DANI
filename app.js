const express = require('express');
const path = require('path');

const app = express();

// Configuração para servir arquivos estáticos na pasta 'public'
app.use(express.static(path.join(__dirname, 'lava-jato')));

// Rota para o arquivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'lava-jato', 'index.html'));
});

// Rota para o arquivo arquivo1.html
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'lava-jato', 'dashboard.html'));
});

// Rota para o arquivo arquivo2.html
app.get('/template', (req, res) => {
  res.sendFile(path.join(__dirname, 'lava-jato', 'template.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
