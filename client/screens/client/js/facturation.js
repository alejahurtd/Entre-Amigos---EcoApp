import socket from './socketConnection.js';

const botonConfirmar = document.getElementById('confirmar');
const botonCancelar = document.getElementById('cancelar');

// Evento para confirmar pedido
botonConfirmar.addEventListener('click', (e) => {
	e.preventDefault(); // Evitar recarga de la página

	socket.emit('sendData', { mensaje: 'El usuario ha confirmado el pedido.' });

	// const orderData = {
	// 	id: Math.floor(Math.random() * 10000), // ID aleatorio para prueba
	// 	producto: 'Nevado Brownie',
	// 	tamaño: 'Mediano',
	// 	detalles: 'Crema Chantilly',
	// 	estado: 'Orden recibida',
	// 	hora: new Date().toLocaleTimeString()
	// };

	// Redirigir a la pantalla de estado de la orden
	window.location.href = './orderStatus.html';
});

// Evento para cancelar pedido
botonCancelar.addEventListener('click', () => {
	// Emitir evento de cancelación al servidor
	socket.emit('canceledOrder', { mensaje: 'El usuario ha cancelado el pedido.' });

	// Volver a la pantalla principal
	window.location.href = './home.html';
});
