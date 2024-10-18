const users = [{ id: 1, name: 'Barista', password: '1234' }];

// Validar login del barista
const loginUser = (req, res) => {
	const { name, password } = req.body;
	const user = users.find((u) => u.name === name && u.password === password);

	if (user) {
		res.status(200).json({ message: 'Login exitoso', user });
	} else {
		res.status(401).json({ message: 'Credenciales incorrectas' });
	}
};

module.exports = { loginUser };
