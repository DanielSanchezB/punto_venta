const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
        
        conn.query('SELECT * FROM productos', (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)  
        })
    })
})

routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('INSERT INTO productos SET ?', [req.body], (err, rows) => {
            if(err) return res.send(err)

            res.send('El articulo ha sido registrado')  
        })
    })
})

routes.delete('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('DELETE FROM productos WHERE id = ?', [req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.send('El articulo ha sido eliminado')  
        })
    })
})

routes.put('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('UPDATE productos SET ? WHERE id = ?', [req.body, req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.send('El articulo ha sido actualizado')  
        })
    })
})

// routes.get('/clientes/:id/:psw', (req, res) => {
routes.get('/clientes', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
        
        conn.query('SELECT * FROM clientes', (err, rows) => {
        console.log(req.body)
        // conn.query('SELECT * FROM clientes WHERE correo = ? AND psw = ?', [req.params.correo, req.params.psw], (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)  
        })
    })
})

// routes.get('/resumen/:idProdOrden', (req, res) => {
// // routes.get('/resumen', (req, res) => {
//     req.getConnection((err, conn) => {
//         if(err) return res.send(err)
        
//         conn.query('SELECT * FROM productos_orden WHERE idOrden = ?', [req.params.idProdOrden], (err, rows) => {
//         // conn.query('SELECT * FROM productos_orden', (err, rows) => {
//             if(err) return res.send(err)

//             res.json(rows)  
//         })
//     })
// })

module.exports = routes