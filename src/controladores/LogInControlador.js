const bcrypt = require('bcrypt');

function login(req, res) {
    if(req.session.loggedin != true) {
        res.render('login/index');
    } else {
        res.redirect('/');
    }
}

// INICIAR SESIÓN: Verifica si el correo ya existe, si sí, se redirige
function autenticar(req, res) {
    const data = req.body;
    // console.log(data);
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM clientes WHERE correo = ?', [data.correo], (err, userdata) => {
            if(userdata.length > 0) 
            {
                // console.log('El usuario SÍ existe');
                userdata.forEach(element => {
                    bcrypt.compare(data.psw, element.psw, (err, isMatch) => {
                        if(!isMatch) {
                            res.render('login/index', { error: 'ERROR: contaseña incorrecta! '});
                        } else {
                            // console.log('Bienvenido');
                            req.session.loggedin = true;
                            req.session.name = element.nombre;

                            res.redirect('/');
                        }
                    });
                });
            }
            else 
            {
                res.render('login/index', { error: 'ERROR: el usuario no existe! '});
            }
        });
    });
}

function registrar(req, res) {
    if(req.session.loggedin != true) {
        res.render('login/registrar');
    } else {
        res.redirect('/');
    }
}

function tiendaUsuario(req, res) {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM clientes WHERE correo = ?', [data.correo], (err, userdata) => {
            if(userdata.length > 0) 
            {
                console.log('El usuario ya existe!');
                res.render('login/registrar', { error: 'ERROR: el usuario ya existe! '});
            }
            else 
            {
                console.log(data)
                bcrypt.hash(data.psw, 12).then(hash => {
                    data.psw = hash;
                    
                    req.getConnection((err, conn) => {
                        conn.query('INSERT INTO clientes SET ?', [data], (err, rows) => {

                            req.session.loggedin = true;
                            req.session.name = data.nombre;

                            res.redirect('/');
                        });
                    });
                });
            }
        });
    });

}

function logout(req, res) {
    if(req.session.loggedin == true) {
        req.session.destroy();
    }
    res.redirect('/login')
}

module.exports = {
    login, 
    registrar,
    tiendaUsuario,
    autenticar,
    logout,
}