require('dotenv').config(); 

//express
const express = require('express');
const app = express();

//controller imports
const gems = require("./controllers/gemcontroller"); 
const user = require("./controllers/usercontroller");

//db import & sync
const sequelize = require('./db');
sequelize.sync();
app.use(express.json());

//middleware
app.use(require('./middleware/headers'));

//routes
app.use('/api', user);
app.use(require('./middleware/validate-session'));
app.use('/api/gem', gems);

app.listen(process.env.PORT, () => console.log('app is listening on port 3002, friend'));



