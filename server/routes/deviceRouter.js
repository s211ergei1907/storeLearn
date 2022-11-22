const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
//это для того, чтобы получить отдельно взятый device
router.get('/:id', deviceController.getOne)

module.exports = router
