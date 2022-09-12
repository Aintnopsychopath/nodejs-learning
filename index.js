const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./src/routes/index')
const env = require('./src/config/env')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true,}));
app.use(router);


app.listen(env.port, ()=> {
    console.log(`Server started at http://localhost: ${env.port}`);
});

