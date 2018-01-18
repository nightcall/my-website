import express from 'express';

const app = express();

app.use(express.static(__dirname + '/../../public'));

app.post('/send', (req, res) => {
	console.log('Message received');
	res.status(200);
	res.end();
});

app.get('*', (req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.send(`
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8" />
				<link rel='stylesheet' href='/style.css' />
				<title>Yassine Blue - Portfolio</title>
			</head>
			<body>
				<div id='root'></div>
				<script src='/bundle.js'></script>
			</body>
		</html>
	`);
});

app.listen(8080);