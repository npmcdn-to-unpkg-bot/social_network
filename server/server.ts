// Imports
import {setupApp, createHttpServer} from './helpers/setup';
import {route} from './helpers/route';
import * as sio from 'socket.io';

const port = 3000; // The port that the app will listen on
var app = setupApp();
route(app);
var server = createHttpServer(app);

export var ioServer = sio(server);
ioServer.set('origins', '*:*');

ioServer.on('connection', socket => {
    console.log('A user connected.');
});

server.listen(port, () => console.log(`Server listening on port ${port}`));