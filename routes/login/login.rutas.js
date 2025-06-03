const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
//s3
const multer = require('multer');
const subirArchivo = require('../../s3/subirArchivo');
//const eliminarArchivo = require('../../s3/eliminarArchivo');
const fs = require('fs');
const path = require('path');

const upload = multer({ dest: 'uploads/' });

//s3 listar
const listarArchivos = require('../../s3/listarArchivos');
//s3 descarga
const obtenerUrlArchivo = require('../../s3/obtenerUrl');
//s3 eliminar
const eliminarArchivo = require('../../s3/eliminarArchivo');


router.post('/', upload.single('archivo'), async (req, res) => {
    const file = req.file; //s3
    try {
        console.log("Archivo recibido:", file);
        await subirArchivo(file.path, file.originalname);
        fs.unlinkSync(file.path); // para eliminar el archivo local
        res.json({ mensaje: 'Archivo subido correctamente a S3' }); //mensaje aprobado
    } catch (err) {
        console.error("Error detallado al subir archivo:", err);
        res.status(500).json({ error: 'Error al subir el archivo', detalle: err.message });
    }
    /*
        const { correo, contrasenia } = req.body;
        console.log(correo, " // ", contrasenia);
        if (!correo || !contrasenia) {
            return res.status(400).json({ mensaje: 'Correo y contraseña son obligatorios' });
        }
        const query = "select * from usuario where correo = ? AND contrasenia=?";
        db.query(query, [correo, contrasenia], (err, results) => {
            if (err) {
                console.error("Error al ejecutar el procedimiento:", err);
                return res.status(500).json({ mensaje: 'Error en el servidor al logearse' });
            }
            const usuario = results[0]; // Los procedimientos almacenados retornan un array de arrays
            if (!usuario) {
                return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
            }
            // Login exitoso
            return res.status(200).json({
                mensaje: 'Login exitoso',
                usuario
            });
        });
        */
});

router.get('/lista', async (req, res) => {
    try {
        const archivos = await listarArchivos();
        res.json(archivos);
    } catch (error) {
        console.error("Error al listar archivos:", error);
        res.status(500).json({ error: 'No se pudieron listar los archivos' });
    }
});

router.get('/descarga/:nombre', async (req, res) => {
    try {
        const nombre = decodeURIComponent(req.params.nombre);
        const url = await obtenerUrlArchivo(nombre);
        res.json({ url });
    } catch (error) {
        console.error("Error al generar URL:", error);
        res.status(500).json({ error: 'No se pudo obtener la URL del archivo' });
    }
});

router.delete('/eliminar/:nombre', async (req, res) => {
  try {
    const nombre = decodeURIComponent(req.params.nombre);
    await eliminarArchivo(nombre);
    res.json({ mensaje: 'Archivo eliminado correctamente' });
  } catch (error) {
    console.error("Error al eliminar archivo:", error);
    res.status(500).json({ error: 'No se pudo eliminar el archivo' });
  }
});

module.exports = router;

