const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const appsRoutes = require('./routes/applications');

mongoose.connect('mongodb+srv://mldr31:QovrU7zcklnJQy8J@cluster0.bziwg.mongodb.net/test2?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
  
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/api/apps', appsRoutes);

module.exports = app;