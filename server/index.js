require ('dotenv').config();

const express = require('express');
const session = require('express-session');
const massive = require('massive');
const {json} = require('body-parser');
const controller = require('./controller');

const app = express();

app.use(json());
app.use(session({
    process: env.SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {maxAge: 100 * 60 * 60 * 25 * 7}
}));

massive(process.env.CONNECTION_STRING)
    .then(db => { app.set('db', db);
    console.log('database connected')
})

//endpoints

app.post('/auth/login', controller.login);
app.post('/auth/register', controller.register);
app.put('/auth/edit', controller.edit);
app.get('/auth/users', controller.user);
app.get('/auth/logout', controller.logout);
app.delete('/auth/delete/:id', controller.delete)

app.listen(process.env.EXPRESS_PORT, ()=>{
    console.log(`listening on port ${process.env.EXPRESS_PORT}`)
})