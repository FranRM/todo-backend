'use strict';

const fields = require('anxeb-mongoose').Fields;
const SchemaBuilder = require('../../../middleware/schema');
const Login = require('../common/login')

module.exports = {
	Schema : function (params) {
		return new SchemaBuilder(params, 'User').build((builder) => ({
			first_names : fields.string({ required : true }),
			login  : new Login.Schema({required:true, static:true}),
			role  : new fields.enum({required:true}, ['client', 'admin']),
		}));
	}
};