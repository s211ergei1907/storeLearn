const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
// const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
//С помощью этого метода будем проверять авторизован пользоваттель или не авторизован (делаем по JWT токену)
router.get('/auth', userController.check)

//Для того, чтобы убедиться работает ли наше приложение или нет
router.get('/auth', (req, res) => {
    res.json({message : 'All working'})
})

module.exports = router
