const express = require ('express');
const morgan = require('morgan');
const cors = require('cors');
const {getAllMessages, getSingleMessage} = require('./controllers/message.js')
const {getAllUsers, getSingleUser, getUserMessage} = require('./controllers/user.js')

// import express from 'express';
// import morgan from 'morgan'; 
// import cors from 'cors';
// // import {getAllUsers, getSingleUser} from '../controllers/user.js'
// import {getAllMessages, getSingleMessage} from '../controllers/message.js'


const app = express();
const port = process.env.PORT || 3000;

const CORSOption = {origin: process.env.ORIGIN}
app.use(morgan('dev'));
app.use(cors(CORSOption));
app.use(express.json());

app.route('/').get((req, res) => {
   res.send("<h1> Welcome to our Twitter API! </h1>")
})


app.route('/messages').get(getAllMessages);
app.route('/messages/:id').get(getSingleMessage);
app.route('/users').get(getAllUsers);
app.route('/users/:id').get(getSingleUser)
app.route('/users/:id/message').get(getUserMessage);
app.route('/me')

app.listen(port, ()=> console.log(`server is listening on port ${port} `))
