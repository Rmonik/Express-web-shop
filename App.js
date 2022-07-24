// npm modules
const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

// project imports
const routes = require("./routes/routes");

// initializing express
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

// global middleware
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next)=>{
    console.log(req.method, req.path);
    next();
});

// routes
app.use(routes);



app.listen(3000);