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
    quantity: req.body.quantity
  });

  newItem.save().then(item => res.json(item));
});

// @route   Put api/items/:id
// @desc    Update an Item
// @access  Public
// @CRUD    Update
router.put('/:id', (req, res) => {
  Item.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, item) => {
      if (err)
        return res.status(500).send('There is a problem updating the item');
      res.status(200).send(item);
    }
  );

  //   User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
  //     if (err) return res.status(500).send("There was a problem updating the user.");
  //     res.status(200).send(user);
  // });
});

export default router;
