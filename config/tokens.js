const jwt = require('jsonwebtoken');
const mySecret = require('./secrets');

function getToken(user) {
	const payload = {
		userid: user.id,
		username: user.username
	};

	const options = {
		expiresIn: '1d'
	};

	const token = jwt.sign(payload, mySecret.jwtSecret, options);
	return token;
}

module.exports = getToken;
