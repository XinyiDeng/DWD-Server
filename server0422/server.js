/*
var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200,{'Content-type': 'text/html'});
	response.end('<html><body>Home, URL was: ' + request.url + '</body></html>');
	console.log(request.url); // in the terminal
}).listen(3000, 'localhost');

console.log('Server running at http://localhost:3000/');

*/

/*
var connect = require('connect');

var app = connect()
	.use(connect.static('public'))
	.use(function (req, res) {
		res.end("Couldn't find it.");
	})
	.listen(3000);

*/
var connect = require('connect');

var app = connect()
	.use(connect.bodyParser())
	.use(connect.static('public'))
	.use(function (req, res) {
		if (req.url === '/process') {
			res.end(req.body.title + ' contains ' + req.body.content + ' .');
		} else {
			res.end("Invalid Request");
		}
	})
	.listen(3000);
