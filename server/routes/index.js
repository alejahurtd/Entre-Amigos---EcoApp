const express = require('express');
const path = require('path');
const router = express.Router();

// Ruta para servir la pantalla de inicio
router.get('/home', (req, res) => {
	res.sendFile(path.join(__dirname, '../../client/screens/client/html/home.html'));
});

module.exports = router;
