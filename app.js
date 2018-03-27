const express = require("express");
const app = express();
const dataFile = require("./data/data.json");

app.get('/', (req, res) => {
   res.send("Hellow from NodeJS and Express"); 
});
app.get('/developer', (req, res) => {
    var info = '';
    dataFile.developer.forEach(function(item){
       info += `
        <li>
        <h1>${item.name}</h1>
        <p>${item.summery}</p>
        </li>
       ` 
    });
   res.send(`
    <h1>Developer</h1>
    ${info}
   `); 
});

app.listen(process.env.PORT, process.env.IP, () => {
   console.log("NodeJS/Express Server Has Started") 
});