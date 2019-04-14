import express = require('express')
import http = require('http')
import socketio = require('socket.io')

import {Engine} from './engine/engine'
import {GenericMachine} from './machines/generic';

let app = express();
let server = new http.Server(app)
let io = socketio(server)

let gui = null

server.listen(3000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', socket => {
    gui = socket
});


const site = new Engine()

const waterSource = new GenericMachine()

site.registerMachine(waterSource)

site.on('tick', status => {
    if(gui !== null){
        gui.emit('tick', status)
    }
})

site.run()
