
const express = require('express');
const router = express.Router();
const db = require('./config');
//const db = require('./config');
const sequelize = require('./config');
const path = require('path')
const Op = sequelize.Op;
// Import User Models
const Entrada = sequelize.import('entrada', require("../models/entrada"));

//Test de conexión
sequelize.authenticate().then(() =>
{
console.log("Conexión establecida");
}).catch(err => {
console.error("No te puedes conectar: ", err);
});

router.get('/', (req, res) =>{
    res.send('api works');
});

router.get('/entradas', (req, res) =>{
    Entrada.findAll().then(rows => {
        res.status(200).send(rows);
    });
});

router.post('/entrada',(req, res)=>{
    Entrada.create({
        titulo: req.body.titulo,
        contenido: req.body.contenido,
    }).then(rows => {
        res.status(200).send("1");
    }).catch(err => {
        console.log(err);
        res.status(200).send("0")
    });
});

router.get('/getEntrada/:entrada', (req, res) =>{
        Entrada.findAll({ where: { identrada: req.params.entrada } }).then(rows => {
        res.status(200).send(rows);
    });
});

router.get('/eliminar/:id', (req, res) =>{
    Entrada.destroy({
        where: {
        identrada: req.params.id
        }
    }).then(rows => {
        res.status(200).send("1");
    }).catch(err => {
        console.log(err);
        res.status(200).send("0")
    });
});

module.exports = router;
