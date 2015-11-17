var worker = new Worker("init_array.js");
worker.onmessage = function(evt) {
alert("Data array initialization finished!");
var data = evt.data;
};
worker.postMessage();