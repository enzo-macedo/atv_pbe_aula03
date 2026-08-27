const express = require("express");
const clubes = require("./dados.js");

const app = express();

const PORTA = 3000;

// Permite receber JSON
app.use(express.json());

// Permite acessar o index.html
app.use(express.static(__dirname));

// Rota principal
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Listar todos os clubes
app.get("/clubes", (req, res) => {
    res.json(clubes);
});

// Buscar clube pelo ID
app.get("/clubes/:id", (req, res) => {
    const id = Number(req.params.id);

    const clube = clubes.find(clube => clube.id === id);

    if (!clube) {
        return res.status(404).json({
            mensagem: "Clube não encontrado"
        });
    }

    res.json(clube);
});

// Iniciar servidor
app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});