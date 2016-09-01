// Imports
import {setupApp, createHttpServer} from './helpers/setup';
import {route} from './helpers/route';

const port = 3000; // The port that the app will listen on
var app = setupApp();
route(app);
var server = createHttpServer(app);

server.listen(port, () => console.log(`Server listening on port ${port}`));