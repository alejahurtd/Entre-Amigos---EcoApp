import socket from './socketConnection.js';

const preguntas = [
	{ pregunta: '¿Qué tipo de día estás teniendo hoy?', opciones: ['Energético', 'Relajado', 'Necesito motivación'] },
	{ pregunta: '¿Cuál es tu sabor preferido?', opciones: ['Dulce', 'Amargo', 'Agridulce'] },
];

// Array para almacenar las respuestas seleccionadas
const respuestas = new Array(preguntas.length).fill(null);

// Estado actual de la pregunta
let preguntaActual = 0;

// Seleccionamos elementos del DOM con control de errores
const preguntaElem = document.getElementById('pregunta');
const opcionesElem = document.getElementById('opciones');
const botonAnterior = document.getElementById('anterior');
const botonSiguiente = document.getElementById('siguiente');

// Verificar que los elementos del DOM existan
if (!preguntaElem || !opcionesElem || !botonAnterior || !botonSiguiente) {
	console.error('No se encontraron los elementos del DOM necesarios.');
} else {
	// Función para mostrar la pregunta actual
	function mostrarPregunta() {
		const pregunta = preguntas[preguntaActual];

		// Actualizamos el contenido de la pregunta
		preguntaElem.textContent = pregunta.pregunta;

		// Limpiamos las opciones anteriores
		opcionesElem.innerHTML = '';

		// Generamos las opciones dinámicamente
		pregunta.opciones.forEach((opcion, index) => {
			const input = document.createElement('input');
			input.type = 'radio';
			input.name = 'opcion';
			input.value = opcion;
			input.id = `opcion${index}`;

			const label = document.createElement('label');
			label.setAttribute('for', `opcion${index}`);
			label.textContent = opcion;
			label.style.display = 'block';

			opcionesElem.appendChild(input);
			opcionesElem.appendChild(label);

			// Marcar opción si ya fue seleccionada
			if (respuestas[preguntaActual] === opcion) {
				input.checked = true;
				botonSiguiente.disabled = false;
			}

			input.addEventListener('change', () => {
				respuestas[preguntaActual] = opcion;
				botonSiguiente.disabled = false;
			});
		});

		// Cambiar el texto del botón "Siguiente" en la última pregunta cuando el usuario ya marco
		botonSiguiente.textContent = preguntaActual === preguntas.length - 1 ? 'Terminar' : 'Siguiente';
	}

	// Eventos de los botones
	botonAnterior.addEventListener('click', () => {
		if (preguntaActual === 0) {
			window.location.href = './home.html';
		} else {
			preguntaActual--;
			mostrarPregunta();
		}
	});

	botonSiguiente.addEventListener('click', () => {
		if (preguntaActual < preguntas.length - 1) {
			preguntaActual++;
			mostrarPregunta();
		} else {
			// Emitir evento al servidor cuando el test termina
			socket.emit('test-completed', { respuestas });
			window.location.href = './recomendation.html';
		}
	});

	// Mostrar la primera pregunta al cargar la página
	mostrarPregunta();
}
