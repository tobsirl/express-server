import express from 'express';
import mongoose from 'mongoose';

// Item Model
import Item from '../../models/Item';

const router = express.Router(); // eslint-disable-line

// @route Get api/items/test
// @desc Tests item route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Item Works' }));

// @route   Get api/items/
// @desc    Get All Items
// @access  Public
// @CRUD    Read
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   Post api/items/
// @desc    Create an Items
// @access  Public
// @CRUD    Create
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    quanity: req.body.quanity
  });

  newItem.save().then(item => res.json(item));
});

export default router;
