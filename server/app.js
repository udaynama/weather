{/* <script type="module" src="sequelize.js"></script> */}
const express = require('express');
const bp = require("body-parser"); 
const port = 5426
const app = express();
app.use(bp.urlencoded({ extended: false }))
const sequelize=

app.use(bp.json())

app.use(require("morgan")("dev"))

app.get("/weather", (req, res) => {
    res.json("hello world");
   });

   app.listen(port, () => {
    console.log("Express server listning on port " + port);
  });