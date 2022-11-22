const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')

// Метод post для того чтобы brand создавать
router.post('/', brandController.create)
//Метод get чтобы получать
router.get('/', brandController.getAll)

module.exports = router


//Также есть метод delete, но прицнип точно такой же как у get И зщые 