import socket from './socketConnection.js';

const botonContinuar = document.getElementById('continuar');
const botonCancelar = document.getElementById('cancelar');

botonContinuar.addEventListener('click', () => {
	socket.emit('user-continue', { mensaje: 'El usuario decidió continuar con la recomendación.' });
	window.location.href = './facturation.html';
});

botonCancelar.addEventListener('click', () => {
	socket.emit('user-cancelar', { mensaje: 'El usuario canceló la recomendación.' });
	window.location.href = './home.html';
});
