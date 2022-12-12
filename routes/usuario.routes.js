const bcrypt = require('bcrypt')
const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
        
        conn.query('SELECT * FROM clientes', (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)  
        })
    })
})

routes.post('/', (req, res) => {
    const data = req.body;
    console.log(data)
    bcrypt.hash(data.psw, 12).then(hash => {
        data.psw = hash;
        
        req.getConnection((err, conn) => {
            conn.query('INSERT INTO clientes SET ?', [data], (err, rows) => {
                // res.redirect('/');
            });
        });
    });
})

module.exports = routes
