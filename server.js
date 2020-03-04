const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const db = require('./db')
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(process.env.PORT || 8080);
console.log("Server Running on Port 8080");
