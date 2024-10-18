// Nuestro unico server

const app = require('./server/app');
const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);

const io = new Server(server, {
	cors: { origin: '*' },
	transports: ['websocket', 'polling'],
});

// Inicializar sockets y manejadores
require('./server/socket')(io);

const PORT = process.env.PORT || 3000;

// Iniciar servidor
server.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Manejar errores del servidor
server.on('error', (error) => {
	console.error(`Error en el servidor: ${error.message}`);
});
