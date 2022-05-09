const ws = require('ws');
const wsServer = new ws.Server({port: 9999});
const clients = [];
function onConnect(wsClient) {
    console.log('[*] New client');
    clients.push(wsClient);
    wsClient.on('message', function(message) {
        console.log('[M] ' + message);
        for (let client of clients) {
            if (client != wsClient) {
                client.send(message.toString());
            }
        }
    });
    wsClient.on('close', function() {
        console.log('[*] Client disconnected');
        clients.splice(clients.indexOf(wsClient), 1);
    });
}
wsServer.on('connection', onConnect);
