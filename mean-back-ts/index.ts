import Server from './classes/server';
import usersRouter from './routes/users.router';

const server = new Server();

server.start(()=>{
    console.log(`Corriendo en el puerto ${server.port}`)
})

server.app.use('/api/usuarios',usersRouter)