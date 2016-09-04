"use strict";
// Imports
const setup_1 = require('./helpers/setup');
const route_1 = require('./helpers/route');
var sio = require('socket.io');
const port = 3000; // The port that the app will listen on
var app = setup_1.setupApp();
route_1.route(app);
var server = setup_1.createHttpServer(app);
exports.io = sio(server);
exports.io.set('origins', '*:*');
exports.io.on('connection', socket => {
    console.log('A user connected.');
});
server.listen(port, () => console.log(`Server listening on port ${port}`));
//# sourceMappingURL=server.js.map