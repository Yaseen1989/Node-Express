const express   = require("express");
const Router = express.Router();


Router.get('/', (req, res) => {
   res.send(`
   <h1>Welcome</h1>
   <h2>Thanks for joining us</h2>
   `); 
});

module.exports = Router;