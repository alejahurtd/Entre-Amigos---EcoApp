module.exports = (socket) => {
	console.log('Conectado a los eventos del cliente.');

	// Escuchar la respuesta del servidor al inicio del test
	socket.on('inicie-test', (data) => {
		console.log('Servidor respondió:', data.mensaje);
	});

	// Escuchar cuando se completa el test
	socket.on('test-completed', (data) => {
		console.log('Test completado con respuestas:', data.respuestas);
		// Aquí podríamos agregar más lógica, como guardar las respuestas
	});

	// Escuchamos la recomendación de la bebida desde el servidor (IA)
	// socket.on('drinkRecommendation', (recomendation) => {
	// 	showRecommendation(recomendation);
	// 	console.log('Recomendación recibida del servidor:', recomendation);
	// });

	socket.on('user-continue', (data) => {
		console.log('Evento desde recomendación:', data.mensaje);
	});

	socket.on('user-cancelar', (data) => {
		console.log('Evento de cancelación:', data.mensaje);
	});

	// 3. Emitimos los datos completos del pedido cuando el cliente confirma el pedido
	const confirmOrder = (orderData) => {
		// Emitimos el evento 'sendData' con los datos completos del pedido
		socket.emit('sendData', orderData);
		console.log('Datos del pedido enviados al servidor:', orderData);
	};

	// 4. Escuchamos actualizaciones del estado del pedido desde el servidor
	socket.on('orderStatusUpdate', (status) => {
		updateOrderStatus(status);
		console.log('Order status updated from server:', status);
	});
	sendTestData(testData);
	confirmOrder(orderData);

	socket.on('orderStatusUpdate', (estado) => {
		console.log(`Estado del pedido recibido: ${estado}`);
	});
};
