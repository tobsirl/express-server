import express from 'express';
import mongoose from 'mongoose';

// Item Model
import Item from '../../models/Item';

const router = express.Router(); // eslint-disable-line

// @route Get api/posts/test
// @desc Tests post route
// @access Public
router.get('/test', (req, res) => res.json({msg: 'Post Works'}));

export default router;
