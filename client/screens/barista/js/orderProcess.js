import socket from './socketConnection.js';

const estados = ['Orden recibida', 'Orden en proceso', 'Orden lista'];
let indiceEstado = 0;

const botonCambiarEstado = document.getElementById('cambiar-estado');

botonCambiarEstado.addEventListener('click', () => {
	const nuevoEstado = estados[indiceEstado];
	socket.emit('cambiar-estado', nuevoEstado);
	indiceEstado = (indiceEstado + 1) % estados.length;
});
