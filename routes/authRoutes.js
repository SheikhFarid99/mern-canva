const authController = require('../controllers/authController')

const router = require('express').Router()

router.post('/user-register', authController.user_register)
router.post('/user-login', authController.user_login)

module.exports = router