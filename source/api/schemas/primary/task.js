'use strict';

const fields = require('anxeb-mongoose').Fields;
const SchemaBuilder = require('../../../middleware/schema');

module.exports = {
	Schema : function (params) {
		return new SchemaBuilder(params, 'Task').build((builder) => ({
			name 		: fields.string({ required : true }),
			description : fields.string({ required : true }),
			priority	: fields.enum({required:true}, ['low', 'normal', 'urgent']),
			owner 		: fields.reference({required:true, index:true}, 'User'),
			done		: fields.enum({required:true}, ['True', 'False']),
			date		: fields.number({required:true})
		}));
	}
};