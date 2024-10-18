// este archivo es para el manejo de eventos de pedidos (barista y cliente)

// const handleEvents = (socket, db, io) => {
// 	// 1. Manejo del evento 'sendTestData' cuando el cliente finaliza el test
// 	socket.on('sendTestData', (testData) => {
// 		try {
// 			console.log(`Datos del test recibidos del cliente ${socket.id}:`, testData);

// 			// Procesamos los datos del test y generamos una recomendación de bebida
// 			const recommendation = generateDrinkRecommendation(testData);

// 			// Emitimos la recomendación de bebida al cliente que envió los datos del test
// 			socket.emit('drinkRecommendation', recommendation);
// 			console.log(`Recomendación enviada al cliente ${socket.id}:`, recommendation);
// 		} catch (error) {
// 			console.error('Error al procesar los datos de prueba:', error);
// 			socket.emit('error', { message: 'Error al procesar los datos de prueba' });
// 		}
// 	});
// }

// 2. Manejo del evento 'sendData' cuando el cliente confirma el pedido
// socket.on('sendData', (orderData) => {
// 	try {
// 		console.log(`Datos del pedido recibidos del cliente ${socket.id}:`, orderData);

// 		// Guardamos los datos del pedido en la base de datos
// 		db.orders.push(orderData);

// 		// Emitimos una confirmación de que el pedido fue recibido correctamente
// 		socket.emit('orderConfirmation', { message: 'Pedido recibido con éxito', orderData });

// 		// Notificamos al barista que un nuevo pedido fue recibido
// 		io.emit('orderStatusUpdate', { status: 'Received', orderId: orderData.id });
// 		console.log(`Estado del pedido actualizado para el pedido ${orderData.id}: Received`);
// 	} catch (error) {
// 		console.error('Error al procesar los datos del pedido:', error);
// 		socket.emit('error', { message: 'Error al procesar el pedido' });
// 	}
// Escuchar cambios de estado de pedido desde el barista
module.exports = (io, socket) => {
	console.log('Eventos del barista y estado del pedido registrados.');

	// Escuchar cambios de estado desde el barista
	socket.on('cambiar-estado', (estado) => {
		console.log(`Estado actualizado a: ${estado}`);
		io.emit('orderStatusUpdate', estado); // Enviar estado a todos los clientes
	});
};
