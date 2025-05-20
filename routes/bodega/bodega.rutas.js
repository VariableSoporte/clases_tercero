const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

//http://localhost:3030/bodega/
router.get('/', (req, res) => {
    db.query('SELECT * FROM bodega', (err, resultado) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al consultar los usuarios' });
        } else {
            res.json(resultado);
        }
    });
});


module.exports = router;
