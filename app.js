const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const path = require ('path');

const router = require('./router')

app.set('view engine', 'ejs');
const PUBLIC_DIRECTORY_PATH = path.join (__dirname, "public");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.json());

//buat pengganti delete,put jadi post
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use(router);
app.use(express.static(PUBLIC_DIRECTORY_PATH));

app.listen(3000, () => {console.log("Listening to the server on http://localhost:3000")});