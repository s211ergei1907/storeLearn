require("dotenv").config();
const express = require("express");
const sequelize = require("./db");

const PORT = process.env.PORT || 5000;

const app = express();

//Функция для подключения к БД
//Функция делаем асинхронной, потому что все операции с БД являются асинхронными
const start = async () => {
  try {
    await sequelize.authenticate()  //authenticate() - с помощью нее устанавливается подключение к БД
    await sequelize.sync()          //sync() - сверяет состояние БД, которое мы опишем
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
        console.log(error);
  }
};


start();