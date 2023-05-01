const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const connection = mysql.createConnection(config)
const sql = `INSERT INTO people(nome) values ('Glauco Santos')`;
connection.query(sql);
connection.end();

app.get('/', (req, res) => {
    const conectionInsert = mysql.createConnection(config)
    conectionInsert.query('SELECT * FROM people', (err, result, fields) => {
        if (err) throw err;
        let response = '<h1>Full Cycle Rocks!</h1>';
        for(row in result) {
            console.log(result[row]);
            response += `<br /> ${result[row].nome}`;
        }
        res.send(response)
    })
    conectionInsert.end();
})

app.listen(port, ()=>{
    console.log("rodando na porta 3000")
})