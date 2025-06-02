const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

//http://localhost:3030/usuario/
router.get('/', (req, res) => {
    db.query('SELECT * FROM usuario', (err, resultado) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al consultar los usuarios' });
        } else {
            res.json(resultado);
        }
    });
});
//http://localhost:3030/usuario/agregar
router.post('/agregar', (req, res) => {
    const [nombre, correo, apellido ] = req.body;
    db.query('INSERT INTO values (?,?,?);',[nombre,apellido, correo], (err, resultado) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al consultar los usuarios' });
        } else {
            res.json(resultado);
        }
    });
});
//http://localhost:3030/usuario/agregar
router.delete('/eliminar', (req, res) => {
    const [id_usuario] = req.body;
    db.query('DELETE from usuario where id_usuario = ?;',[id_usuario], (err, resultado) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al consultar los usuarios' });
        } else {
            res.json(resultado);
        }
    });
});


module.exports = router;


/*
POST -> enviar datos (crear)
GET -> leer datos
PUT -> actualizar datos
DELETE -> eliminar datos
*/