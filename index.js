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

import {getAllUsers, getSingleUser, getUserMessage} from './controllers/user.js'
import {getAllMessages, getSingleMessage} from './controllers/message.js'


const app = express();
const port = process.env.PORT || 3000;

const CORSOption = {origin: process.env.ORIGIN || 'http://localhost:3000'}
app.use(morgan('dev'));
app.use(cors(CORSOption));
app.use(express.json());

app.route('/').get((req, res) => {
   const options = {
      root: path.join(__dirname)
   }
   const fileName='index.html';

   res.sendFile(fileName, options, (err)=> {
      if(err)
         {next(err);}
         else
         {console.log('Sent:', fileName)}
      })
})


app.route('/messages').get(getAllMessages);
app.route('/messages/:id').get(getSingleMessage);
app.route('/users').get(getAllUsers);
app.route('/users/:id').get(getSingleUser)
app.route('/users/:id/message').get(getUserMessage);
// app.route('/me').get(getUser)

app.listen(port, ()=> console.log(`server is listening on port ${port} `))
