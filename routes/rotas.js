const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.get('/', controller.homePage)

router.get('/contato', controller.contactPage)

router.get('/produtos', controller.productsPage)

router.get('/about', controller.aboutPage)

router.get('/services', controller.servicesPage)

module.exports = router