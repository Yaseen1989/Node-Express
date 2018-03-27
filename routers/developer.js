const express = require("express");
const Router = express.Router();
const dataFile = require("../data/data.json");

Router.get('/developer', (req, res) => {
    var info = '';
    dataFile.developer.forEach(function(item){
       info += `
        <li>
        <h1>${item.name}</h1>
        <p>${item.summery}</p>
        </li>
       ` ;
    });
   res.send(`
    <h1>Developer</h1>
    ${info}
   `); 
});

Router.get('/developer/:developerid', (req, res) => {
   var developer = dataFile.developer[req.params.developerid];
   res.send(`
    <h1>${developer.title}</h1>
    <h2>${developer.name}</h2>
    <p>${developer.summery}</p>
   `); 
});

module.exports = Router;