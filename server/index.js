require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')

const PORT = process.env.PORT || 5000

const app = express()

//Функция для подключения к БД
//Функция делаем асинхронной, потому что все операции с БД являются асинхронными
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    } 
}


start()