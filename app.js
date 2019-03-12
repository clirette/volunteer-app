const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware setup
mongoose.connect('mongodb://127.0.0.1:27017/volunteer', {useNewUrlParser: true})
.then(() => console.log('Connected to DB'))
.catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log('App Started'));