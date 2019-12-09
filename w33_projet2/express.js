'use strict'
const express = require('express');
const cors = require('cors')
//Utilisation de la librairie path disponible dans le noyau
const path = require('path')
const objProvincesJsonData = require('./prov.json')
const objRegionsJsonData = require('./regions.json')
const objRegionsProvincesJsonData = require('./regions_provinces.json')
const app = express();

//Utilisation de cors pour le cross-origin resource sharing
app.use(cors())

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'pug')
app.set('view options', { layout: false})

app.get('/', (req, res)=>{
    res.send('Bonjour de w33. On fait projet 2')
})

// On utilise le module express static  (http://expressjs.com/en/starter/static-files.html) 
app.use(express.static(path.join(__dirname, '/public')))

const portno = 3050;   // Numéro de Port utilisé par l'application

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Accéder à cette url à partir de http://localhost:3050/regions
app.get('/regions', (req, res)=>{
    res.json(objRegionsJsonData)
})

//Accéder à cette url à partir de http://localhost:3050/provinces
app.get('/provinces', (req, res)=>{
    res.json(objProvincesJsonData)
})

//Accéder à cet url à partir de http://localhost:3050/regions_provinces/Centre
app.get('/regions_provinces/:province', (req, res) =>{
    console.log(req.params.province)
    res.json(objRegionsProvincesJsonData.regions[req.params.province])
})

const server = app.listen(portno, ()=> {
  const port = server.address().port
  console.log(`L'application écoute sur le port ${port}.`);
});