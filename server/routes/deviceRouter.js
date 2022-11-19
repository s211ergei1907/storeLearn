const Router = require('express')
const router = new Router()
// const deviceController = require('../controllers/deviceController')

router.post('/')
router.get('/')
//это для того, чтобы получить отдельно взятый device
router.get('/:id')

module.exports = router
