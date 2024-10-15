const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar JSON
app.use(bodyParser.json());

// Rota para o Webhook
app.post('/webhook', (req, res) => {
    const payload = req.body;
    console.log('Evento recebido do GitHub:', payload);
    res.status(200).send('Evento recebido');
});

app.listen(PORT, () => {
    console.log(`Servidor de webhook rodando na porta ${PORT}`);
});
