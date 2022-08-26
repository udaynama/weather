const express = require('express');
const axios = require('axios');
const bp = require("body-parser"); 
const port = 8000
const app = express();
app.use(bp.urlencoded({ extended: false }))
const cors = require('cors');
// const sequelize=

app.use(bp.json())

app.use(require("morgan")("dev"))

//sequelize 
const sequelize = require("./database");

const Weather = require("./weather");

// let weatherId = null;
sequelize
  .sync({ force: true })
//   .then((result) => {
//     return Weather.create({ cityName: "jaipur", temperature: "20c" });
//     console.log(result);
//   })
//   .then((weather) => {
//     // weatherId = weather.id;
//     console.log("first row", weather);
//     // return Weather.findAll({ where: weatherId });
//   })
//   .then((data)=>{
//     console.log("all data",data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

  


  app.post("/weather-get",cors(), async (req, res) => {
    try {
      const cityName=req.body.cityName;
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=c7b88c0f26c04477aa790600222508&q=${cityName}`)
        Weather.create({cityName:response.data.location.name,temperature:response.data.current.temp_c}).then(()=>{
          Weather.findAll().then((value)=>{console.log(res.json(value));;
         })
        })
        }
    catch (err) {
        console.log(err)
    }
  })
  // app.get("/weather",cors(), (req, res) => {
  // Weather.findAll().then(value=>res.json(value))
  //  });
  // app.post('/weather-create', function(req, res) {
  //   const cityname=req.body.cityName;
  //   Weather.create({ cityName: req.body.cityName, temperature: req.body.temperature }).then(function(value) {
  //     res.json(value);
  //   });
  // });

  app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

  app.listen(port, () => {
    console.log("Express server listning on port " + port);
  });
