//import the mongoose package
const mongoose = require('mongoose');
//get the Schema class
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
	name: {
		required: true,
		type: String
	},
	city: String,
	address: String
});

module.exports = mongoose.model('Company', CompanySchema);
