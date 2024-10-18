import socket from './socketConnection.js';

const estadoPedidoElem = document.getElementById('estado-pedido');
const botonVolver = document.getElementById('volver');

// Escuchar cambios de estado desde el servidor
socket.on('orderStatusUpdate', (estado) => {
	estadoPedidoElem.textContent = estado;

	// Cambiar el color según el estado
	if (estado === 'Orden en proceso') {
		estadoPedidoElem.style.backgroundColor = '#FFA500'; // Naranja
	} else if (estado === 'Orden lista') {
		estadoPedidoElem.style.backgroundColor = '#6AAF35'; // Verde
	} else {
		estadoPedidoElem.style.backgroundColor = '#c8102e'; // Rojo
	}
});

// Botón para volver al inicio
botonVolver.addEventListener('click', () => {
	window.location.href = './home.html';
});
