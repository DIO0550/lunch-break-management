 'use strict';
const express = require('express')
const app = express()
const PORT = 8080
const HOST = '0.0.0.0';
const path = require('path');

app.use(express.static(path.join(__dirname, '/dist')));
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
