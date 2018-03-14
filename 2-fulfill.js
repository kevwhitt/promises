new Promise(function(fulfill, reject) {
	return setTimeout(function() {
		return fulfill('FULFILLED!');
	}, 400);
}).then(console.log);