//import dependencies
import express from 'express';
import morgan from 'morgan'; 
import cors from 'cors';

// import routes
import messages from './routes/messages.js'
import users from './routes/users.js'
import me from './routes/me.js'

const app = express();
const port = process.env.PORT || 3000;
const CORSOption = {origin: process.env.ORIGIN || 'http://localhost:3000'||"https://github.com/Petersool/twitterclone"||"https://petersool.github.io/twitterclone/#/"}

app.set('view engine', 'pug')

app.use(morgan('dev'));
app.use(cors(CORSOption));
app.use(express.json());

//routes

app.route('/').get((req, res) => {
   res.render('index')
})
app.use('/messages', messages);
app.use('/users', users)
app.use('/me', me)



app.listen(port, ()=> console.log(`server is listening on port ${port} `))

//? ES5 syntax
//const express = require ('express');
// const morgan = require('morgan');
// const cors = require('cors');
// const path = require('path');
// const {getAllMessages, getSingleMessage} = require('./controllers/message.js')
// const {getAllUsers, getSingleUser, getUserMessage} = require('./controllers/user.js')