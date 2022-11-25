const {Type} = require('../models/models')
const ApiError = require('../error/ApiError');

class TypeController {
    async create(req, res) {
        // По сколько это post запрос, поэтому извлекаем название этого типа   
        const {name} = req.body
        // Затем создаем этот тип и присваем переменной type
        //функция ассинхронная, поэтому добавляем await
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) {    
        //Получение типов, в переменную type кладем функцию findAll, функция вернет все существующие типы
        const types = await Type.findAll()
        return res.json(types)
    }

}

module.exports = new TypeController()
