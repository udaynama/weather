const Sequelize =require("sequelize");
const sequelize = require("./database");


const Weather = sequelize.define("weather",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    cityName:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    temperature:{
        type:Sequelize.STRING,
        allowNull:false,
    }
    // nextTemp:{
    //     type:Sequelize.STRING,
    //     allowNull:false,
    // },
    //  nextToTemp:{
    //     type:Sequelize.STRING,
    //     allowNull:false,
    // }
});

module.exports = Weather;