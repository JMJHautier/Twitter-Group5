// const express = require ('express');
// const morgan = require('morgan');
// const cors = require('cors');
// const path = require('path');
// const {getAllMessages, getSingleMessage} = require('./controllers/message.js')
// const {getAllUsers, getSingleUser, getUserMessage} = require('./controllers/user.js')

import express from 'express';
import morgan from 'morgan'; 
import cors from 'cors';
import path from 'path';
import pug from 'pug';
import {getAllUsers, getSingleUser, getUserMessage} from './controllers/user.js'
import {getAllMessages, getSingleMessage} from './controllers/message.js'
import {getRandomUser} from './controllers/me.js'

const app = express();
const port = process.env.PORT || 3000;

const CORSOption = {origin: process.env.ORIGIN || 'http://localhost:3000'}
app.use(morgan('dev'));
app.use(cors(CORSOption));
app.use(express.json());
app.set('view engine', 'pug')

app.route('/').get((req, res) => {
   
   res.render('index')
})


app.route('/messages').get(getAllMessages);
app.route('/messages/:id').get(getSingleMessage);
app.route('/users').get(getAllUsers);
app.route('/users/:id').get(getSingleUser)
app.route('/users/:id/message').get(getUserMessage);
app.route('/me').get(getRandomUser)

app.listen(port, ()=> console.log(`server is listening on port ${port} `))
