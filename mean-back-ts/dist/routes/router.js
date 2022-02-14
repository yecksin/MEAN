"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/', (reg, res) => {
    console.log("hace un get");
    res.json({
        ok: true,
        message: "Todo está bien"
    });
});
exports.router.post('/', (reg, res) => {
    console.log("hace un get");
    res.json({
        ok: true,
        message: "Todo está bien"
    });
});
exports.default = exports.router;
