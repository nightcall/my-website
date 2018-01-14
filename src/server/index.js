import express from 'express';

const app = express();

app.use(express.static(__dirname + '/../../public'));

app.get('*', (req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.send(`
		<!DOCTYPE html>
		<html>
			<head>
				<link rel='stylesheet' href='/style.css' />
				<title>Yassine Blue</title>
			</head>
			<body>
				<div id='root'></div>
				<script src='/bundle.js'></script>
			</body>
		</html>
	`);
});

app.listen(8080);