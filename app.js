import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import items from './routes/api/items';

dotenv.config();

const app = express();

// Connect to database
mongoose
  .connect('mongodb://localhost/express-item')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello World!'));

// Use Routes
app.use('/api/items', items);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
