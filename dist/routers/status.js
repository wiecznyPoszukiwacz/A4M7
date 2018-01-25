"use strict";
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    res.send({
        name: 'a4m7',
        status: 'ok'
    });
});
module.exports = router;
//# sourceMappingURL=status.js.map