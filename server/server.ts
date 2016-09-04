// Imports
import {setupApp, createHttpServer} from './helpers/setup';
import {route} from './helpers/route';
var sio = require('socket.io');

const port = 3000; // The port that the app will listen on
var app = setupApp();
route(app);
var server = createHttpServer(app);

export let io = sio(server);
io.set('origins', '*:*');

io.on('connection', socket => {
    console.log('A user connected.');
});

server.listen(port, () => console.log(`Server listening on port ${port}`));