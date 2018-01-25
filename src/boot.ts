import express = require('express')
import * as statusRouter from './routers/status'

const server = express()

server.use('/status', statusRouter)

server.listen(3000, () => {
    console.log('up and running')
})
