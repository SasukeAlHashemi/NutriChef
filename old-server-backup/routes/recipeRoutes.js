const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// POST /api/recipes → Add a new recipe
router.post('/', async (req, res) => {
  try {
    const { title, ingredients, instructions, author } = req.body;

    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
      author
    });

    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//GET all recipes

router.get('/', async (req, res) => {
    try{
        const recipes = await Recipe.find().sort({ createdAt: -1});
        res.json(recipes);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

module.exports = router;
