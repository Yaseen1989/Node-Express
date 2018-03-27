const express = require("express");
const app = express();
const dataFile = require("./data/data.json");
//var mainRoutes = require("./routers/main");

//app.use('/', mainRoutes); or use the below code 
app.use(require("./routers/main"));
app.use(require("./routers/developer"));



app.listen(process.env.PORT, process.env.IP, () => {
   console.log("NodeJS/Express Server Has Started") 
});