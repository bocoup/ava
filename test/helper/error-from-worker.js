'use strict';

const serializeError = require('../../lib/serialize-error');

module.exports = function (err, {type, file, stack} = {}) {
	if (stack) {
		err.stack = stack;
	}

	const serialized = serializeError(err);

	if (type) {
		serialized.type = type;
	}

	if (file) {
		serialized.file = file;
	}

	return serialized;
};
