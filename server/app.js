// server/app.js

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Configurar archivos estáticos
app.use(express.static(path.join(__dirname, '../client')));

app.use(cors());
app.use(express.json());

module.exports = app;
