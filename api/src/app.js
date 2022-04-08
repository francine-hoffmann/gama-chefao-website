const express = require( 'express');
const routes = require('./routes');
const path = require('path');
//const requestLog = require('./middlewares/requestLog');
//mysql://b4cc5078b73d0c:9e7f98b8@us-cdbr-east-05.cleardb.net/heroku_7c1cde81c68e7fa
const db = require('./database');

const app = express();

db.hasConection();

app.use(express.json());
//app.use(requestLog);
app.use(routes);
const PORT = 3000;
app.listen(PORT, () => { console.log('listening on port '+PORT)});