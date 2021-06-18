
const express = require('express')
require('dotenv').config()
const hbs = require('hbs');
const app = express()
const port = process.env.PORT

//  Handelbars
app.set('view engine', 'hbs');
//  MidleWear Para Servir Contenido Estaticos
app.use(express.static('Public'))
//  Partial Directory
hbs.registerPartials(__dirname + '/Views/Partial', (err) =>{});

//  Rutas renderizadas con Handelbars
app.get('/', (req, res) => {
  res.render('home', {
    nombre : 'katchvidal',
    titulo : 'Curso Node'
  })
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre : 'katchvidal',
    titulo : 'Curso Node'
  })
})

app.get('/elements', (req, res) => {

  res.render('elements', {
    nombre : 'katchvidal',
    titulo : 'Curso Node'
  })
})

app.get('*', (req, res) => {
    
    res.sendFile(__dirname + '/Public/404.html')
  })




//  Servidor Work at
app.listen(port, () => {
  console.log(`BackEnd: Example app listening at http://localhost:${port}`)
})
