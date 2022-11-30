const bcrypt = require('bcrypt');

function login(req, res) {
    res.render('login/index');
}

function registrar(req, res) {
    res.render('login/registrar');
}

function tiendaUsuario(req, res) {
    const data = req.body;
    console.log(data)
    bcrypt.hash(data.psw, 12).then(hash => {
        data.psw = hash;
        
        req.getConnection((err, conn) => {
            conn.query('INSERT INTO clientes SET ?', [data], (err, rows) => {
                res.redirect('/');
            });
        });
    });
}

module.exports = {
    login, 
    registrar,
    tiendaUsuario,
}