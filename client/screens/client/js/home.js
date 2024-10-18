import socket from './socketConnection.js';

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
	console.log('Usuario hizo clic en "Comenzar"');

	// Emitimos el evento directamente desde el cliente
	socket.emit('start-test', { mensaje: 'El usuario inició el test.' });

	window.location.href = './test.html';
});
