const codigosValidos = ['1234', '5678']; // Simulación de base de datos temporal

module.exports = (socket) => {
	socket.on('baristaLogin', (data) => {
		const { codigo } = data;
		const esValido = codigosValidos.includes(codigo);

		console.log(`Barista intentó iniciar sesión con código: ${codigo}`);

		socket.emit('check-code', esValido);
	});
};
