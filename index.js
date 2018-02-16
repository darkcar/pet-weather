const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var indexList = require('./middleware/index');



express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  // .get('/', (req, res) => res.render('pages/index'))
  .get('/', function(request, response) {
  	indexList.getPetsList();
  	response.render('pages/index');
  })
  .get('/pets/new', (req, res) => res.render('pages/new'))
  .get('/pets/:id', (req, res) => res.render('pages/detail'))
  .get('/map', (req, res) => res.render('pages/map'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


