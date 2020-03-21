const server = require('./api/server.js');

const PORT = process.env.PORT || 3300;
server.listen(PORT, () => {
	console.log(process.env.GOODBYE);
	console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
