const express = require('express'); //(express) é utilizado na tratativa de rotas
const bodyParser = require('body-parser'); // (bodyParser) faz o servidor enteder as requisições
const { request } = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controller/authController')(app);


app.listen(3003);
