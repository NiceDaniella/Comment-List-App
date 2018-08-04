const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes')

app.use(bodyParser());
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use(routes);

app.listen(3000, () => console.log('Example app listening on port 3000!'));