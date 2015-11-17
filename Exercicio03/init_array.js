self.onmessage = function(evt) {

	var data = [];
	for (var i=0; i<1500; i++) {
		data[i] = [];
		for (var j=0; j<500; j++) {
			data[i][j] = Math.random();
		}
	}

	self.postMessage(data, 'http://127.0.0.1');
	data = null; // unassign our copy of the data now, to free up memory
};