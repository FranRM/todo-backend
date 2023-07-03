'use strict';

const Task = require('../schemas/primary/task');
const Helper = require("../helpers/task");

module.exports = {
	collection : 'Tasks',
	schema     : new Task.Schema(),
	methods    : {
		toClient : function () {
			return {
				id  	: this._id,
			}
		},
		toAdmin : function () {
			return {
				id  	: this._id,
			}
		},
		toClientDetailed : function () {
			return {
				id			: this._id,
				name 		: this._doc.name,
				description : this._doc.description,
				priority 	: this._doc.priority,
				owner 		: this._doc.owner,
				done 		: this._doc.done,
				date 		: this._doc.date
			}
		},
		using    : function (context) {
			return new Helper(context, this)
		},
	}
};