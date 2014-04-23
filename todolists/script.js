var express = require('express');

var app = express.createServer();

var todolists = require('./data/todolists').data;

app.get('/', function(req, res){
	res.render('index.ejs', {title: 'Overall List'});
});

app.get('/todolists', function(req, res){
	res.render('todolists.ejs', {
		title: 'Overall List - D/W/M/Y',
		todolists: todolists
	});
});

app.get('/todolist/:title', function(req, res){
	res.send('<h1>' + req.params.title + '</h1>');
});

app.get('/*', function(req, res){
	res.status(404).render('error.ejs', {title:'Error'});
});

app.listen(3000);
