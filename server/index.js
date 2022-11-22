require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

//middleware, который работает с ошибками обязательно должен идти в самом конце
//!Что вообще такое middleware?
//С Клиента отправляется req по определенному маршруту 
//middleware - это по сути промежуточное звено между запросом и функцией, которая должна этот запрос обработать  
app.use(errorHandler)
 

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