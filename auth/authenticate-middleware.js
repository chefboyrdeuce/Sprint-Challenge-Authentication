/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

// module.exports = (req, res, next) => {
//   res.status(401).json({ you: 'shall not pass!' });
// };
const jwt = require('jsonwebtoken');
const { mySecret } = require('../config/secrets');

module.exports = (req, res, next) => {
	const token = req.headers.authorization;

	if (token) {
		jwt.verify(token, mySecret.jwtSecret, (err, decodedToken) => {
			if (err) {
				res.status(401).json({ you: 'error, try again' });
			} else {
				req.decodedJWT = decodedToken;
				next();
			}
		});
	} else {
		res.status(401).json({ you: 'error, log in again' });
	}
};
