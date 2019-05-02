'use strict'

const express = require('express')

const router = express.Router()

const inventory = require('./../../db/inventory')

router.get('/:site/', (req, res) => {

    res.send(inventory[req.params.site])

})

module.exports = router
