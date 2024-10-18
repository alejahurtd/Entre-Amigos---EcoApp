// client/screens/client/js/socketConnection.js

const socket = io('http://localhost:3000', {
	transports: ['websocket', 'polling'],
});

export default socket;
