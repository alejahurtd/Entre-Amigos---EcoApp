const { Server } = require('socket.io');
const authHandlers = require('./event-handlers/authHandlers');
const orderHandlers = require('./event-handlers/orderHandlers');

module.exports = (io) => {
	io.on('connection', (socket) => {
		console.log(`Usuario conectado: ${socket.id}`);

		// Asignamos los handlers de autenticación al socket conectado
		authHandlers(socket);
		orderHandlers(io, socket);

		socket.on('start-test', (data) => {
			console.log('Inicio del test recibido:', data.mensaje);
			socket.emit('inicie-test', { mensaje: 'Test registrado en el servidor.' });
		});

		socket.on('user-continue', (data) => {
			console.log('Usuario decidió continuar:', data.mensaje);
		});

		socket.on('user-cancelar', (data) => {
			console.log('Usuario canceló la recomendación:', data.mensaje);
		});

		socket.on('sendData', (data) => {
			console.log('Pedido confirmado:', data.mensaje);
		});

		socket.on('canceledOrder', (data) => {
			console.log('Pedido cancelado:', data.mensaje);
		});

		socket.on('cambiar-estado', (estado) => {
			console.log(`Estado actualizado a: ${estado}`);
			io.emit('orderStatusUpdate', estado); // Enviar estado a todos los clientes
		});

		socket.on('disconnect', () => {
			console.log(`Usuario desconectado: ${socket.id}`);
		});
	});
};
