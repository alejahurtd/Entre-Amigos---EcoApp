import socket from '../../client/js/socketConnection.js';

const inputCodigo = document.getElementById('codigo-barista');
const botonIniciarSesion = document.getElementById('iniciar-sesion');

botonIniciarSesion.addEventListener('click', () => {
	const codigo = inputCodigo.value.trim();

	if (codigo === '') {
		alert('Por favor ingresa tu código.');
		return;
	}

	socket.emit('baristaLogin', { codigo });
});

// Escuchar la respuesta del servidor
socket.on('check-code', (esValido) => {
	if (esValido) {
		window.location.href = './dashboard.html';
	} else {
		alert('Código incorrecto. Inténtalo nuevamente.');
	}
});
