const express = require('express');
const mysql = require('mysql2');

const app = express();

app.use(express.json());

//criar a conexão
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'robotech'
});

//Testando a conexão
connection.connect((err) => {
    if (err) {
        console.error('ERRO AO CONECTAR: ', err);
        return;
    } console.log('CONECTADO AO MYSQL COM SUCESSO!')
});

//Rota para listar Categorias dos produtos
app.get('/categoria_produtos', (req, res) => {
    const sql = 'SELECT * FROM categoria_produtos';

    connection.query(sql, (err, results) => {
        if (err) {
            console.error("ERRO DE CONSULTA: ", err);
            return res.status(500).json({ erro: "Erro no servidor" });
        } res.json(results);
    });

})

//Iniciar o servidor
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})