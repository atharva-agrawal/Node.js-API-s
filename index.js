const express = require("express");
const config = require("./appConfig/config");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/api");
require("dotenv").config();

//BodyParser
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


//CONNECT DB
config.mongoconnect();

//DEFINE ROUTES
app.use("", router);


//START SERVER
const PORT = process.env.PORT || config.port;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
