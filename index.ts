import Server from './classes/server';
import { SERVER_PORT } from './global/enviromment';
import database from './classes/database';
import  router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';



database();
const server = new Server();

// Body Parser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// Cors 
server.app.use(cors({origin: true, credentials: true}));

server.app.use('/', router)


server.start(() => {
    console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`)
});