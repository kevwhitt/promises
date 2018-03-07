require('es6-promise');

new Promise(function(fulfill, reject) {
	return setTimeout(function() {
		return fulfill('FULFILLED!');
	  }, 450);
}).then(console.log);