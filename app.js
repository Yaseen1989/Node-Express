const express = require("express");
const app = express();

app.get('/', (req, res) => {
   res.send("Hellow from NodeJS and Express"); 
});

app.listen(process.env.PORT, process.env.IP, () => {
   console.log("NodeJS/Express Server Has Started") 
});