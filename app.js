const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const events = require('./routes/api/events');

const app = express();

// Middleware setup
mongoose.connect('mongodb://127.0.0.1:27017/volunteer', {useNewUrlParser: true})
.then(() => console.log('Connected to DB'))
.catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/events', events);
app.use('/api/users', users);


const port = process.env.PORT || 8000;
app.listen(port, () => console.log('App Started'));