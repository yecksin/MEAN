"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const users_router_1 = __importDefault(require("./routes/users.router"));
const server = new server_1.default();
server.start(() => {
    console.log(`Corriendo en el puerto ${server.port}`);
});
server.app.use('/api/usuarios', users_router_1.default);
