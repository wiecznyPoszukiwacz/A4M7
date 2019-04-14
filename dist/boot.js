"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const engine_1 = require("./engine/engine");
const generic_1 = require("./machines/generic");
let app = express();
let server = new http.Server(app);
let io = socketio(server);
let gui = null;
server.listen(3000);
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});
io.on('connection', socket => {
    gui = socket;
});
const site = new engine_1.Engine();
const waterSource = new generic_1.GenericMachine();
site.registerMachine(waterSource);
site.on('tick', status => {
    if (gui !== null) {
        gui.emit('tick', status);
    }
});
site.run();
//# sourceMappingURL=boot.js.map