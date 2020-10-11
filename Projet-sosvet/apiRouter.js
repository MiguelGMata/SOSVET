const express = require('express');
require('express-async-errors');
const User = require('./routes/Users');
const middlewares = require('./middlewares/jwt.utils');
const Animal = require('./routes/Animal');
const Veterinaires = require('./routes/Veterinaires');

const placeCtrl = require('./routes/Animal');


exports.router = (function () {
  const apiRouter = express.Router();

  apiRouter.route('/inscription').post(User.inscription);
  apiRouter.route('/connexion').post(User.connexion);
  apiRouter.route('/profil').get(User.profil);

  apiRouter.route('/animal').post(Animal.animalAdd);
  apiRouter.route('/animals').get(Animal.animals);
  apiRouter.route('/animal/:id').get(Animal.animal);
  apiRouter.route('/animal/:id').delete(Animal.animalDelete);
  apiRouter.route('/animal/:id').put(Animal.animalPut);
  //apiRouter.route('/ani').post(Animal.aniAdd);

  apiRouter.route('/veterinaires').get(Veterinaires.veterinaires);
  apiRouter.route('/veterinaire/:id').get(Veterinaires.veterinaire);


  return apiRouter;


})();

