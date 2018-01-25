
import express = require('express')

const router = express.Router()

router.get('/', (req, res) => {

    res.send({
        name: 'a4m7',
        status: 'ok'
    })

})

export = router