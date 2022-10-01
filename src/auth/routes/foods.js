'use strict';

const express = require('express');
const router = express.Router();
const {FoodsModel} = require('../models');

//Create
router.post('/foods', async(req, res, next) => {
  try {
    const newFood = await FoodsModel.create(req.body);

    res.status(201).send(newFood);
  } catch(error) {
    console.log('Unable to Post', error.message);
    next('Unable to Post');
  }

});

//Read
router.get('/foods', async (req, res, next) => {
  try {
    let foods = await FoodsModel.findAll();
    res.status(200).send(foods);
  } catch(error) {
    next(error);
  }
});

//ReadOne
router.get('/foods/:id', async (req, res, next) => {
  try {
    let foodId = req.params.id;
    let food = await FoodsModel.findOne({where: {id: foodId}});

    res.status(200).send(food);
  } catch(error) {
    next(error);
  }
});

//Update
router.put('/foods/:id', async (req, res, next) => {
  try {
    let foodId = req.params.id;
    let data = req.body;
    let updatedfood = await FoodsModel.update(data, {where: {id: foodId}});

    res.status(201).send(updatedfood);
  } catch(error) {
    next(error);
  }
});

//Destroy
router.delete('/foods/:id', async (req, res, next) => {
  try {
    let foodId = req.params.id;
    await FoodsModel.destroy({where: {id : foodId}});

    res.status(200).send('food Deleted');
  } catch(error) {
    next(error);
  }
});

module.exports = router;
