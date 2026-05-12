const express = require('express');

const app = express();

app.get('/',(req, res) =>{
    res.send("Página inicial da aplicação.");
});

app.get('/carros', (req, res) =>{
    const carro = {
        nome: "Fusca",
        ano: 1995
    }
    res.json(carro);
});

app.get('/usuarios', (req, res) =>{
    res.send("Acesso a rota usuarios");
});

app.listen(3000, () => {
    console.log("Servidor express executando na porta 3000\n http://localhost:3000");
});