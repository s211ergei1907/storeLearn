const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')


// Файлы brand роутер и остальные будут являться подроутерами, мы должны это в основном роутере указать (ниже)
// Первым делом передаем ссылку, вторым передаем сам роутер
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

module.exports = router
