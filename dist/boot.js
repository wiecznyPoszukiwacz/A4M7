"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const statusRouter = require("./routers/status");
const server = express();
server.use('/status', statusRouter);
server.listen(3000, () => {
    console.log('up and running');
});
//# sourceMappingURL=boot.js.map