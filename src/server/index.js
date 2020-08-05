require('dotenv').config();
const PORT = 5000;
const path = require('path');
const bodyParser = require("body-parser");
const cors = require('cors');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(cors());
const bidController = require('./controller/bid')

setTimeout(() => {

    app.get('/', (req, res) => {
        res.sendFile(path.resolve('dist/index.html'))
    });
    app.get('/bundle.js', (req, res) => {
        res.sendFile(path.resolve('dist/bundle.js'))
    });
    app.get('/main.css', (req, res) => {
        res.sendFile(path.resolve('dist/main.css'))
    });
    app.get('/api/getBids', bidController.getBidFromBidder)

}, 200);

app.listen(PORT, () => console.log('Listening on Port:', PORT));
