// npm modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// project imports
const routes = require("./routes/routes");

// initializing express
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

// global middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next)=>{
    console.log(req.method, req.path);
    next();
});

// routes
app.use(routes);



app.listen(3000);