//server.js
const hapi = require('hapi');
const server = new hapi.Server();
const mongoose = require('mongoose');
const mongoDbUri = 'mongodb://admin:password123@ds143163.mlab.com:43163/hapi_db';
const CompanyRoutes = require('./routes/company.routes');

//connect with mongoDB
mongoose.connect(mongoDbUri, {
	useMongoClient: true
});
mongoose.connection.on('connected', () => {
	console.log(`app is connected to ${mongoDbUri}`);
});
mongoose.connection.on('error', err => {
	console.log('error while connecting to mongodb', err);
});
server.connection({
	host: 'localhost',
	port: '3000'
});

server.route(CompanyRoutes);

server.start(err => {
	if (err) {
		throw err;
	}
	console.log(`Server Running at PORT ${server.info.port}`);
});
