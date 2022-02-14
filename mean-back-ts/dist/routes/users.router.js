"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
exports.usersRouter = (0, express_1.Router)();
exports.usersRouter.get('/', (req, res) => {
    console.log("hace un get");
    res.json({
        ok: true,
        message: "Todo está bien"
    });
});
exports.usersRouter.post('/', (req, res) => {
    console.log(req.body);
    res.json({
        ok: true,
        message: "Todo está bien",
        body: req.body
    });
});
exports.default = exports.usersRouter;
