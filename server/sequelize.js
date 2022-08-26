import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const weatherApp = sequelize.define('weatherApp', {
  cityname: DataTypes.STRING,
  temprature: DataTypes.STRING,
});

const jane = await weatherApp.create({
    cityname: 'jaipur',
    temprature: '4c',
  });
const users = await weatherApp.findAll();
console.log("Jane's auto-generated ID:", users);