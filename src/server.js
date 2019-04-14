const express = require('express')
const ws = require('ws')
const app = express()

const Engine = require ('./engine/engine')

const statusRouter = require('./routers/status')
app.use('/status', statusRouter)

let s = app.listen(2000, () => {
    console.log('up and running')
})

const wss = new ws.Server({server: s, path: '/ws'})

wss.on('connection', sck => {
    sck.on('message', msg => {
        console.log('message: %s', msg)
    })
})


// -----------------------------------------------------------------
const GenericLiquidSourceMachine = require('./machines/liquids/GenericLiquidSourceMachine')

const site = new Engine()
const waterSource = new GenericLiquidSourceMachine()
site.registerMachine(waterSource)
site.run()

site.on('machineStatus', data => {
    wss.clients.forEach(function each(client) {
        if(client.readyState === ws.OPEN){
            client.send(JSON.stringify(data))
        }
    })
})
