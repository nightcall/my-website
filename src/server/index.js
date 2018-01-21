import express from 'express';

const app = express();

app.use(express.static(__dirname + '/../../public'));

const template = (lang) => {
	return `
			<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8" />
				<link rel='stylesheet' href='/style.css' />
				<link rel="icon" type="image/png" href="/favicon.png">
				<title>Yassine Blue - Portfolio</title>
			</head>
			<body>
				<div id='root'></div>
				<script>var __lang = '${lang}';</script>
				<script src='/bundle.js'></script>
			</body>
		</html>`;
}

app.post('/send', (req, res) => {
	console.log('Message received');
	res.status(200);
	res.end();
});

app.get('/:lang/', (req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.send(template(req.params.lang));
})

app.get('*', (req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.send(template('en'));
});

app.listen(8080);