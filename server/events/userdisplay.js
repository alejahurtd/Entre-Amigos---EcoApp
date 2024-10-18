// Carpeta events es para los eventos específicos para el cliente y barista
// Eventos para el barista
import socket from '../../client/js/socketConnection.js';

const botonActualizarEstado = document.getElementById('estado-pedido');

// Emitir cambios de estado al hacer clic en el botón
botonActualizarEstado.addEventListener('click', () => {
	const nuevoEstado = prompt('Ingrese el nuevo estado (Orden en proceso / Orden lista):');

	if (nuevoEstado) {
		socket.emit('cambiar-estado', nuevoEstado); // Emitir evento al servidor
	}
});

// Escuchar actualizaciones de estado desde el servidor
socket.on('orderStatusUpdate', (estado) => {
	botonActualizarEstado.textContent = estado;

	// Cambiar color del botón según el estado
	if (estado === 'Orden en proceso') {
		botonActualizarEstado.style.backgroundColor = '#FFA500';
	} else if (estado === 'Orden lista') {
		botonActualizarEstado.style.backgroundColor = '#6AAF35';
	}
});
