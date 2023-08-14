// require modules
require('dotenv').config()
const express = require('express');
const cors = require('cors')
const path = require('path')

// require db connection and models
const db = require('./models');

// create express app
const app = express();

// require routes in the controllers folder
const detailsCtrl = require('./controllers/details')
const entriesCtrl = require('./controllers/entries')


// MIDDLEWARE
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// use the React build folder for static files
app.use(express.static(path.join(path.dirname(__dirname), 'frontend', 'dist')))

// Any other route not matching the routes above gets routed by React
app.get('*', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'frontend', 'dist', 'index.html'));
});


// MOUNT ROUTES
// app.get('/', function (req, res) {
//     // res.send('Wellness App')
// });
app.use('/api/entries', entriesCtrl)
app.use('/api/details', detailsCtrl)




// listen to port
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});