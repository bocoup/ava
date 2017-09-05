'use strict';
const stackLineRegex = /^.+( \(.+:[0-9]+:[0-9]+\)|:[0-9]+:[0-9]+)$/;

module.exports = stack => {
	return stack
		.split('\n')
		.map(line => line.trim())
		.filter(line => stackLineRegex.test(line))
		.join('\n');
};
