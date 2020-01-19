const Pool = require('pg').Pool;

const Pool = new Pool({
	user: 'admin',
	password: 'admin',
	host: 'localhost',
	database: 'api',
	port: 5432
});
