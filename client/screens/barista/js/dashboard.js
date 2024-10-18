const socket = io('http://localhost:3000');
const ordenesElem = document.getElementById('ordenes');

// Escuchar nuevas órdenes en tiempo real
socket.on('nueva-orden', (orden) => {
	const fila = document.createElement('tr');

	fila.innerHTML = `
    <td>${orden.id}</td>
    <td>${orden.tamano}</td>
    <td>${orden.hora}</td>
    <td>${orden.detalles}</td>
    <td>${orden.producto}</td>
    <td><button class="estado" data-id="${orden.id}">Orden recibida</button></td>
  `;

	// Agregar evento al botón "Orden recibida"
	fila.querySelector('.estado').addEventListener('click', (e) => {
		const idOrden = e.target.dataset.id;
		window.location.href = `./orderProcess.html?orden=${idOrden}`;
	});

	ordenesElem.appendChild(fila);
});
