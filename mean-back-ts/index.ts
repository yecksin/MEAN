import Server from './classes/server';
import usersRouter from './routes/users.router';
import dbConnection from './database/database.config';

const server = new Server();

dbConnection();

server.start(()=>{
    console.log(`Corriendo en el puerto ${server.port}`)
})

server.app.use('/api/usuarios',usersRouter)