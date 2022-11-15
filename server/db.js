const { Sequelize } = require("sequelize");

//все переменные нужно передать в конструктор
module.exports = new Sequelize(
    process.env.DB_NAME, //название БД
    process.env.DB_USER, //Пользователь под которым мы подключаемся
    process.env.DB_PASSWORD, //Пароль

    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    }
);