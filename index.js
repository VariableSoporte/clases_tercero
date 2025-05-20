const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3030;


const usuarioRutas = require('./routes/usuario/usuario.rutas');
const loginRutas = require('./routes/login/login.rutas');
const seguroRutas = require('./routes/seguro/seguro.rutas');
const bodegaRutas = require('./routes/bodega/bodega.rutas');


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true 
}));

app.use(express.json());

//raiz
//http://localhost:3030/
app.use('/usuario', usuarioRutas); //http://localhost:3030/usuario ->raiz
app.use('/login', loginRutas); //http://localhost:3030/login ->raiz
app.use('/seguro', seguroRutas); //http://localhost:3030/seguro ->raiz
app.use('/bodega', bodegaRutas); //http://localhost:3030/seguro ->raiz

//raiz
//http://localhost:3030/
app.get("/", (req, res) => {
    res.send("probando la api desde la web")
});



app.listen(PORT, () => {
    console.log(`Aplicacion de express esta corriendo en el puerto http://localhost:${PORT}`);
});