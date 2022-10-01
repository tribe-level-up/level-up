'use strict';

const express = require('express');
const router = express.Router();
const {CocktailsModel} = require('../models');

//Create
router.post('./cocktails', async (req, res, next) => {
  const newCocktail = await CocktailsModel.create(req.body);

  res.status(201).send(newCocktail);
});

//Read
router.get('/cocktails', async (req, res, next) => {
  try {
    let cocktails = await CocktailsModel.findAll();
    res.status(200).send(cocktails);
  } catch(error) {
    next('Unable to Get All');
  }
});

//ReadOne
router.get('/cocktails/:id', async (req, res, next) => {
  try {
    let cocktailId = req.params.id;
    let cocktail = await CocktailsModel.findOne({where: {id: cocktailId}});

    res.status(200).send(cocktail);
  } catch(error) {
    next('Unable to Get One');
  }
});

//Update
router.put('/cocktails/:id', async (req, res, next) => {
  try {
    let cocktailId = req.params.id;
    let data = req.body;
    let updatedCocktail = await CocktailsModel.update(data, {where: {id: cocktailId}});

    res.status(201).send(updatedCocktail);
  } catch(error) {
    console.log('Unable to Put', error.message);
    // console.error(error);
    next('Unable to Put');
  }
});

//Destroy
router.delete('/cocktails/:id', async (req, res, next) => {
  try {
    let cocktailId = req.params.id;
    await CocktailsModel.destroy({where: {id : cocktailId}});

    req.status(200).send('Cocktail Deleted');
  } catch(error) {
    next('Unable to Delete');
  }
});

module.exports = router;
