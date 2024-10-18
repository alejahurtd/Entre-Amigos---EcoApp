let orders = []; // Simulación bd

// Crear una nueva orden
const createOrder = (req, res) => {
	const newOrder = req.body;
	orders.push(newOrder);
	res.status(201).json({ message: 'Orden creada', order: newOrder });
};

// Obtener todas las órdenes
const getOrders = (req, res) => {
	res.status(200).json(orders);
};

module.exports = { createOrder, getOrders };
