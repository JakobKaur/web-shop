const express = require('express')

const router =  express.Router()

const bookControllerClass = require('../controllers/book')
const bookController = new bookControllerClass()

router.get('/', (req,res,next) =>{
    bookController.getAllbooks(req,res)
})
router.get('/cart', (req,res,next) =>{
    bookController.getAllbooksCart(req,res)
})

module.exports = router