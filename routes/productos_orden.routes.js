const express = require('express')
const routes = express.Router()

routes.get('/:idProdOrden', (req, res) => {
    // routes.get('/resumen', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
        
        conn.query('SELECT * FROM productos_orden WHERE idOrden = ?', [req.params.idProdOrden], (err, rows) => {
        // conn.query('SELECT * FROM productos_orden', (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)  
        })
    })
})

routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('INSERT INTO productos_orden SET ?', [req.body], (err, rows) => {
            if(err) return res.send(err)

            res.send('El articulo se ha agregado')  
        })
    })
})

routes.delete('/:idProdOrd', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('DELETE FROM productos_orden WHERE idProdOrden = ?', [req.params.idProdOrd], (err, rows) => {
            if(err) return res.send(err)

            res.send('El articulo se ha descartado')  
        })
    })
})

routes.get('/suma/:idOrden', (req, res) => {
    // routes.get('/resumen', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
        
        conn.query('SELECT sum(subtotal) SUMA FROM productos_orden WHERE idOrden = ?', [req.params.idOrden], (err, rows) => {
        // conn.query('SELECT * FROM productos_orden', (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)  
        })
    })
})

module.exports = routes