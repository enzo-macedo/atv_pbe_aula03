const express = require("express")
const consultas = require("../dados.js")

const app = express()
const porta = 3000

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {

    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">

        <head>
            <meta charset="UTF-8">
            <title>Agenda Nutricionista</title>
        </head>

        <body>

            <center>

                <h1>Nova Consulta</h1>

                <form action="/" method="post">

                    <input type="number" name="id" placeholder="ID" required>
                    <br><br>

                    <input type="text" name="data" placeholder="Data" required>
                    <br><br>

                    <input type="text" name="paciente" placeholder="Paciente" required>
                    <br><br>

                    <input type="number" name="peso" placeholder="Peso" required>
                    <br><br>

                    <input type="number" name="altura" placeholder="Altura" step="0.01" required>
                    <br><br>

                    <button type="reset">Limpar</button>
                    <button type="submit">Enviar</button>

                </form>

            </center>

        </body>
        </html>
    `)
})
app.post("/", (req, res) => {

    const { id, data, paciente, peso, altura } = req.body

    if (id && data && paciente && peso && altura) {

        consultas.push({
            id,
            data,
            paciente,
            peso,
            altura
        })

        res.send(`
            <center>
                <h1>Consulta enviada com sucesso!</h1>

                <p>Paciente: ${paciente}</p>

                <a href="/">Voltar</a>
            </center>
        `)

    } else {

        res.send(`
            <center>
                <h1>Consulta não enviada!</h1>

                <p>Preencha todos os campos.</p>

                <a href="/">Voltar</a>
            </center>
        `)
    }
})

app.listen(porta, () => {
    console.log(`Servidor: http://127.0.0.1:${porta}`)
})