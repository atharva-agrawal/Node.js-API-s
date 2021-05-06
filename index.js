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
app.use("/signup", require("./routes/signup"));
app.use("/login", require("./routes/login"));
app.use("/logout", require("./routes/logout"));
app.use("/getState", require("./routes/getState"));
app.use("/postState", require("./routes/postState"));
app.use("/getDistrict", require("./routes/getDistrict"));
app.use("/postDistrict", require("./routes/postDistrict"));
app.use("/getChild", require("./routes/getChild"));
app.use("/postChild", require("./routes/postChild"));

//START SERVER
const PORT = process.env.PORT || config.port;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
